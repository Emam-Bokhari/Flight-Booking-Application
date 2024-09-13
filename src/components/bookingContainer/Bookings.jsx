import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addBooking,
  deleteBooking,
} from "../../redux/flightBooking/actionCreators";
import AddBooking from "./AddBooking";
import BookingItem from "./BookingItem";

export default function BookingList() {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  function handleAddNewBooking(formData) {
    dispatch(addBooking(formData));
  }

  function handleDeleteBooking(id) {
    dispatch(deleteBooking(id));
  }

  return (
    <Fragment>
      <section>
        {/* Input Data  */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <AddBooking onAddNewBooking={handleAddNewBooking} />
          </div>
        </div>

        {/* Preview Data  */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody
              className="divide-y divide-gray-300/20"
              id="lws-previewBooked"
            >
              {/* Row   */}

              {bookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={booking}
                  onDeleteBooking={handleDeleteBooking}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
}
