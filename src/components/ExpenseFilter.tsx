import categories from "../categories";

interface ExpenseFitler {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: ExpenseFitler) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
