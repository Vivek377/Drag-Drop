import { useDispatch } from "react-redux";
import { setFilter } from "../redux/blocksSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Filter</label>
      <input
        type="text"
        onChange={handleFilterChange}
        className="mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Filter;
