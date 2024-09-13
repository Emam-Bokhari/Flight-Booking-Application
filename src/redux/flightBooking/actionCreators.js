import { ADD, Delete } from "./actionType";

// add
export const addBooking = (booking) => {
  return {
    type: ADD,
    payload: booking,
  };
};

// delete
export const deleteBooking = (id) => {
  return {
    type: Delete,
    payload: { id },
  };
};
