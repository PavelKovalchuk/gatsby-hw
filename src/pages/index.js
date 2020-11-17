import React from "react";
import { jsx } from "@emotion/react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

import Layout from "../components/layout";
import TestImage from "../components/testImage";

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout>
      <div>
        <h1
          css={jsx`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>

        <TestImage />

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={jsx`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={jsx`
                margin-bottom: ${rhythm(1 / 4)};
              `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={jsx`
                  color: #bbb;
                `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
