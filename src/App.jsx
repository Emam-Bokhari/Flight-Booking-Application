import { Fragment } from "react";
import Navbar from "./components/Navbar";
import BookingList from "./components/bookingContainer/BookingList";

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <BookingList />
    </Fragment>
  );
}
