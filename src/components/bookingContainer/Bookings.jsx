import { Fragment } from "react";
import { MdDelete } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  addBooking,
  deleteBooking,
} from "../../redux/flightBooking/actionCreators";
import AddBooking from "./AddBooking";

export default function BookingList() {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  function handleAddNewBooking(formData) {
    dispatch(addBooking(formData));
  }

  function handleDelete(id) {
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
                <tr key={booking.id} className="lws-bookedTable text-black">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <p className="lws-bookedFrom">{booking.from}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="lws-bookedTo">{booking.to}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedDate">{booking.date}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedGustes">{booking.guests}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="lws-bookedClass">
                      {" "}
                      {booking.ticketClass}{" "}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleDelete(booking.id)}
                        className="lws-remove hover:bg-white"
                      >
                        <MdDelete className="text-red-500 " />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
}
