import { Fragment } from "react";
import { MdDelete } from "react-icons/md";

export default function BookingItem({ booking, onDeleteBooking }) {
  return (
    <Fragment>
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
          <span className="lws-bookedClass"> {booking.ticketClass} </span>
        </td>
        <td className="px-6 py-4 text-center">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onDeleteBooking(booking.id)}
              className="lws-remove hover:bg-white"
            >
              <MdDelete className="text-red-500 " />
            </button>
          </div>
        </td>
      </tr>
    </Fragment>
  );
}
