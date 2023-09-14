const initialState = {
  taiXiu: true,
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/GameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/GameXucXac/1.png" },
    { ma: 1, hinhAnh: "./img/GameXucXac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

export let gameXucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }

    case "PLAY_GAME": {
      // 1. xử lý random xúc xắc
      let mangXucXacRandom = [];
      for (let i = 0; i < 3; i++) {
        // 2. mỗi lần lặp sẽ random ra một con số ngẫu nhiên từ 1 -> 6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // 3. tạo ra đối tượng xúc xắc ngẫu nhiên
        let xucXacRandom = {
          ma: soNgauNhien,
          hinhAnh: `./img/GameXucXac/${soNgauNhien}.png`,
        };
        // 4. push vào mảng xúc xắc ngẫu nhiên
        mangXucXacRandom.push(xucXacRandom);
      }
      state.mangXucXac = mangXucXacRandom;
      // xử lý số bàn chơi
      state.tongSoBanChoi += 1;
      // xử lý số bàn thắng
      let tongSoDiem = mangXucXacRandom.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      // xét điều kiện để người dùng thắng game
      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem <= 11 && !state.taiXiu)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }

    default:
      return { ...state };
  }
};
// export default gameXucXacReducer;
