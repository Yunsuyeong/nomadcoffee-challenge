import client from "../../client";

export default {
  Query: {
    seeCategories: (_, { offset }) =>
      client.category.findMany({
        take: 3,
        skip: offset,
      }),
  },
};
