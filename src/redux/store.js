import { createStore } from "redux";
import flightBookingReducer from "./flightBooking/flightBookingReducer";

const store = createStore(flightBookingReducer);

export default store;
