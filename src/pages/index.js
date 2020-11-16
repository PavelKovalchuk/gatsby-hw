import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Home() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/contact">Contact</Link>
      <Header headerText="Home" />
      <p>Send us a message!</p>
    </div>
  );
}
