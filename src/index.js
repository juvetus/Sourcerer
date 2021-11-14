import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),

  headers: {
    Authorization: "Bearer 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",
    // authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

const cache = new InMemoryCache();

client
  .query({
    query: gql`
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

          repositories(
            first: 50
            orderBy: { field: CREATED_AT, direction: DESC }
          ) {
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
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
