import fetch from "node-fetch";

type QueryDBParams = {
  query: string;
  variables?: unknown;
};

export const queryDB = ({ query, variables }: QueryDBParams) =>
  fetch("https://investments-graphql.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      [process.env.HASURA_HEADER!]: process.env.HASURA_KEY!
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then(res => res.json());