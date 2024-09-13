import { Fragment, useState } from "react";
import frame from "../../assets/Frame.svg";
import vector1 from "../../assets/Vector (1).svg";
import vector3 from "../../assets/Vector (3).svg";

export default function AddBooking({ onAddNewBooking, bookings }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddNewBooking(formData);
    // clear form data
    setFormData({
      id: Date.now(),
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketClass: "",
    });
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="first-hero lws-inputform">
        {/* From  */}
        <div className="des-from">
          <p>Destination From</p>
          <div className="flex flex-row">
            <img src={frame} alt="" />
            <select
              onChange={handleChange}
              value={formData.from}
              className="outline-none px-2 py-2 w-full"
              name="from"
              id="lws-from"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Saidpur">Saidpur</option>
              <option value="coxs Bazar">Coxs Bazar</option>
            </select>
          </div>
        </div>

        {/* To  */}
        <div className="des-from">
          <p>Destination To</p>
          <div className="flex flex-row">
            <img src={frame} alt="" />
            <select
              onChange={handleChange}
              value={formData.to}
              className="outline-none px-2 py-2 w-full"
              name="to"
              id="lws-to"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Saidpur">Saidpur</option>
              <option value="Coxs Bazar">Coxs Bazar</option>
            </select>
          </div>
        </div>

        {/* Date  */}
        <div className="des-from">
          <p>Journey Date</p>
          <input
            onChange={handleChange}
            value={formData.date}
            type="date"
            className="outline-none px-2 py-2 w-full date"
            name="date"
            id="lws-date"
            required
          />
        </div>

        {/* Guests  */}
        <div className="des-from">
          <p>Guests</p>
          <div className="flex flex-row">
            <img src={vector1} alt="" />
            <select
              onChange={handleChange}
              value={formData.guests}
              className="outline-none px-2 py-2 w-full"
              name="guests"
              id="lws-guests"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
            </select>
          </div>
        </div>

        {/* Class  */}
        <div className="des-from !border-r-0">
          <p>Class</p>
          <div className="flex flex-row">
            <img src={vector3} alt="" />
            <select
              onChange={handleChange}
              value={formData.ticketClass}
              className="outline-none px-2 py-2 w-full"
              name="ticketClass"
              id="lws-ticketClass"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
        </div>

        <button
          className={`addCity ${
            bookings.length >= 3 ? "cursor-not-allowed bg-gray-400" : ""
          } `}
          disabled={bookings.length >= 3}
          type="submit"
          id="lws-addCity"
        >
          <svg
            width="15px"
            height="15px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm">Book</span>
        </button>
      </form>
    </Fragment>
  );
}
