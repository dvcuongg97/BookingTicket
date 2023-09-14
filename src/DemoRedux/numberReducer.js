// state tổng

let initialState = {
  soLuong: 1000,
};

export let numberReducer = (state = initialState, action) => {
  // logic dùng để thay đổi data
  // switch nhận tham số là action.type => xét case "action.type" và return lại {...state}
  switch (action.type) {
    case "TANG": {
      state.soLuong += action.slTang;
      return { ...state };
    }
    case "GIAM": {
      state.soLuong -= action.payLoad;
      return { ...state };
    }
    default:
      return state;
  }
};
