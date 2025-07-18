# Personal Expense Tracker (GraphQL API)
This is a backend-only Node.js application that allows users to manage personal expenses
and categories using GraphQL. It uses Express.js, MongoDB, and Apollo Server.
---
## Tech Stack
- Node.js
- Express.js
- Apollo Server (GraphQL)
- MongoDB (via Mongoose)
- Postman (for testing)
---
## Getting Started
1. Clone the repo and install dependencies
2. Set up MongoDB URI in `.env`
3. Run the server with `node index.js`
4. Access playground at: http://localhost:4000/graphql
---
## GraphQL Operations
### Categories
- Create Category
- Get All Categories
- Update Category
- Delete Category
### Expenses
- Create Expense
- Get All Expenses (with Category info)
- Update Expense
- Delete Expense
---
## Postman Testing
URL: http://localhost:4000/graphql
Method: POST
Headers: Content-Type: application/json
Example:
createcategory:
{
  "query": "mutation { createCategory(name: \"Food\", color: \"#ff0000\") { id name color } }"
}

getcategories:
{
  "query": "query { getCategories { id name color } }"
}

createexpense:
{
  "query": "mutation { createExpense(title: \"Lunch\", amount: 150, date: \"2025-07-16\", note: \"with friends\", categoryId: \"<CATEGORY-ID>\") { id title amount } }"
}

getexpenses:
{
  "query": "query { getExpenses { id title amount date note category { name color } } }"
}

updatecategory:
{
  "query": "mutation { updateCategory(id: \"<CATEGORY-ID>\", name: \"Groceries\", color: \"#00ff00\") { id name color } }"
}

updateexpense:
{
  "query": "mutation { updateExpense(id: \"<EXPENSE-ID>\", title: \"Dinner\", amount: 200, date: \"2025-07-15\", note: \"Late night\", categoryId: \"<CATEGORY-ID>\") { id title amount } }"
}

deleteexpense:
{
  "query": "mutation { deleteExpense(id: \"<EXPENSE-ID>\") }"
}

deletecategory:
{
  "query": "mutation { deleteCategory(id: \"<CATEGORY-ID>\") }"
}

---
## Future Enhancements
- User authentication with JWT
- Export data to CSV
- Monthly summary reports
---
