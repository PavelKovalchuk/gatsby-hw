import React from "react";

import Img from "gatsby-image";

import { useStaticQuery, graphql } from "gatsby";

export default function TestMultipleImage(props) {
  console.log("TestMultipleImage props ", props);

  const data = useStaticQuery(
    graphql`
      query {
        allInfoYaml {
          edges {
            node {
              title
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        banner: file(relativePath: { eq: "images/test_image.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  console.log("TestMultipleImage data ", data);

  return (
    <div>
      {data.allInfoYaml.edges.map(({ node }) => (
        <Img fluid={node.image.childImageSharp.fluid} alt={node.alt} />
      ))}
      <h4>Banner</h4>
      <Img
        className="headshot"
        fluid={{ ...data.banner.childImageSharp.fluid, aspectRatio: 21 / 14 }}
        alt="headshot"
      />
    </div>
  );
}
