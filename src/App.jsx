import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Bookings from "./components/bookingContainer/Bookings";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <Bookings />
      </Provider>
    </Fragment>
  );
}
