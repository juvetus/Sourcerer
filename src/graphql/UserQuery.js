import { gql } from "@apollo/client";

export const USER_INFOS = gql`
  {
    user(login: "juvetus") {
      avatarUrl
      login
      name
      bio
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }

      repositories(first: 50, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
          isPrivate
          description
          url
          createdAt
          updatedAt
          primaryLanguage {
            name
            color
          }
          languages(first: 50) {
            nodes {
              name
              color
            }
          }
          collaborators {
            nodes {
              name
              login
              avatarUrl
              url
            }
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
`;
