import React from "react";

import { jsx } from "@emotion/react";
import { rhythm } from "../utils/typography";

import { useStaticQuery, Link, graphql } from "gatsby";

import logo from "../images/logo.png";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div
      css={jsx`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={jsx`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", margin: 0 }}
          />
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={jsx`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
}
