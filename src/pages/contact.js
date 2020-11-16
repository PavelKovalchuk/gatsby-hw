import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <p>Send us a message!</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  );
}
