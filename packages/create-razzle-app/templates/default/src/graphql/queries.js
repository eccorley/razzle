import gql from "graphql-tag";

export const MessagesQuery = gql`
  query MessageQuery {
    messages(first: 10) {
      value
    }
  }
`;
