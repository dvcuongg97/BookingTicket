const initialState = {
  burger: { salad: 0, cheese: 0, beef: 0 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 0,
};

export let burgerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_BREAD_MID": {
      let burgerUpdate = { ...state.burger };
      let { propsBurger, amount } = payload;
      if (amount === -1 && state.burger[propsBurger] < 1) {
        return { ...state };
      }
      burgerUpdate[propsBurger] += amount;
      state.burger = burgerUpdate;
      // tinh tong tien
      state.total += amount * state.menu[propsBurger];
      return { ...state };
    }
  }
  // console.log("state", state);
  return { ...state };
};
