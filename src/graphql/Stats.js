import { gql } from "@apollo/client";

export const STATS_USER = gql`
  {
    user(login: "juvetus") {
      repositories(first: 100) {
        nodes {
          primaryLanguage {
            name
            color
            id
          }
          languages(first: 100) {
            nodes {
              id
              name
              color
            }
            totalCount
          }
        }
      }
    }
  }
`;
