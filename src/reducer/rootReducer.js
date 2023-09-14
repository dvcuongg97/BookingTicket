import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer";
import { burgerReducer } from "./burgerReducer";
import { gameXucXacReducer } from "./gameXucXacReducer";
import gameOanXuXiReducer from "./gameOanTuTi";
import movieBookingReducer from "./movieBookingReducer";
import QuanLySinhVienReducer from "./QuanLySinhVienReducer";
const rootReducer = combineReducers({
  shoeReducer: shoeReducer,
  burgerReducer: burgerReducer,
  gameXucXacReducer: gameXucXacReducer,
  gameOanXuXiReducer,
  movieBookingReducer,
  QuanLySinhVienReducer,
});

export default rootReducer;
