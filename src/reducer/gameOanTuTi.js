const initialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanXuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/gameOanXuXi/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/gameOanXuXi/bao.png", datCuoc: false },
  ],
  ketQua: "Fuck you, bitchh!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bao", hinhAnh: "./img/gameOanXuXi/bao.png" },
};

let gameOanXuXiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangUpdate = [...state.mangDatCuoc];
      mangUpdate = mangUpdate.map((item) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangUpdate;

      return { ...state };
    }
    case "PLAY_GAME": {
      //   console.log("test", action);

      let indexRandom = Math.floor(Math.random() * 3);
      let quanCuocRandom = state.mangDatCuoc[indexRandom];
      state.computer = quanCuocRandom;
      return { ...state };
    }
    case "END_GAME":
      {
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;
        switch (player.ma) {
          case "keo":
            if (computer.ma === "keo") {
              state.ketQua = "hoa nhau!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "fuck ya bitchh!";
            } else {
              state.ketQua = "tuoi l sanh vai!!";
              state.soBanThang++;
            }
            break;
          case "bua":
            if (computer.ma === "keo") {
              state.ketQua = "tuoi l sanh vai!!";
              state.soBanThang++;
            } else if (computer.ma === "bua") {
              state.ketQua = "hoa nhau!!";
            } else {
              state.ketQua = "fuck ya bitchh!";
            }
            break;
          case "bao":
            if (computer.ma === "keo") {
              state.ketQua = "fuck ya bitchh!";
            } else if (computer.ma === "bua") {
              state.ketQua = "tuoi l sanh vai!!";
              state.soBanThang++;
            } else {
              state.ketQua = "hoa nhau!!";
            }
            break;
          default:
            state.ketQua = "fuck ya bitchh!";
        }
      }
      state.soBanChoi++;

      return { ...state };
    default:
      return state;
  }
};

export default gameOanXuXiReducer;
