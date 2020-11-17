import React from "react";

import Img from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

export default function TestImage(props) {
  console.log("TestImage props ", props);

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/test_image.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  console.log("TestImage data ", data);

  return (
    <Img
      className="headshot"
      fixed={data.file.childImageSharp.fixed}
      alt="headshot"
    />
  );
}
