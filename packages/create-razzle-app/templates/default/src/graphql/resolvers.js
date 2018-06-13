import { getMessage } from "./api";
require("es6-promise").polyfill();
require("isomorphic-fetch");
const { connectionFromArray } = require("graphql-relay");

export default {
  Query: {
    async messages(_, args) {
      const messages = await getMessages();

      return connectionFromArray(messages, args);
    },
  },
  Message: {
    id: ({ id}) => id,
    value: ({ value }) => value
  }
};
