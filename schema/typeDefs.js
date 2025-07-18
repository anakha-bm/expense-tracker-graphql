import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Expense {
    id: ID!
    title: String!
    amount: Float!
    date: String!
    note: String
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    color: String
    expenses: [Expense]
  }

  type Query {
    getExpenses: [Expense]
    getExpense(id: ID!): Expense
    getCategories: [Category]
    getCategory(id: ID!): Category
  }

  type Mutation {
    createExpense(
      title: String!
      amount: Float!
      date: String!
      note: String
      categoryId: ID!
    ): Expense

    updateExpense(
      id: ID!
      title: String
      amount: Float
      date: String
      note: String
      categoryId: ID
    ): Expense

    deleteExpense(id: ID!): Boolean

    createCategory(name: String!, color: String): Category
    updateCategory(id: ID!, name: String, color: String): Category
    deleteCategory(id: ID!): Boolean
  }
`;

export default typeDefs;
