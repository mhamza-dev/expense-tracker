import { useState } from "react";
import Table from "./components/Table";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Glass", amount: 20, category: "Utilities" },
    { id: 3, description: "Water", amount: 5, category: "Groceries" },
    { id: 4, description: "Chocolate", amount: 5, category: "Candies" },
  ]);

  const filteredExpenses =
    selectedCategory === ""
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <Table
        expenses={filteredExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
