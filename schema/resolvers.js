// schema/resolvers.js
import Expense from "../models/Expense.js";
import Category from "../models/Category.js";

const resolvers = {
  Query: {
    getExpenses: async () => {
      return await Expense.find().populate("categoryId");
    },
    getCategories: async () => {
      return await Category.find();
    }
  },
  Mutation: {
    createCategory: async (_, { name, color }) => {
      const newCategory = new Category({ name, color });
      return await newCategory.save();
    },
  
    updateCategory: async (_, { id, name, color }) => {
      return await Category.findByIdAndUpdate(
        id,
        { name, color },
        { new: true }
      );
    },
  
    deleteCategory: async (_, { id }) => {
      await Expense.deleteMany({ categoryId: id }); 
      const result = await Category.findByIdAndDelete(id);
      return result ? true : false;
    },
  
    createExpense: async (_, { title, amount, date, note, categoryId }) => {
      const newExpense = new Expense({ title, amount, date, note, categoryId });
      return await newExpense.save();
    },
  
    updateExpense: async (_, { id, title, amount, date, note, categoryId }) => {
      return await Expense.findByIdAndUpdate(
        id,
        { title, amount, date, note, categoryId },
        { new: true }
      );
    },
  
    deleteExpense: async (_, { id }) => {
      const result = await Expense.findByIdAndDelete(id);
      return result ? true : false;
    }
  },

  Expense: {
    category: async (parent) => {
      return await Category.findById(parent.categoryId);
    }
  },

  Category: {
    expenses: async (parent) => {
      return await Expense.find({ categoryId: parent.id });
    }
  }
};

export default resolvers;
