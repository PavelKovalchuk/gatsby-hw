import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Download = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <div>
      <h1>All PDF Downloads</h1>
      <ul>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Download;
