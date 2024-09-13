import { ADD, Delete } from "./actionType";

// initial state
const initialState = {
  bookings: [],
};

const flightBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case Delete:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default flightBookingReducer;
