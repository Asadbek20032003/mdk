import { Component } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}
