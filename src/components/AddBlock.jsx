import { useDispatch, useSelector } from "react-redux";
import { addBlock } from "../redux/blocksSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddBlock = () => {
  const [content, setContent] = useState("");
  const stages = useSelector((state) => state.blocks.stages);
  const [selectedStage, setSelectedStage] = useState(stages[0]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(
        addBlock({
          id: uuidv4(),
          content,
          stage: selectedStage,
          history: [`Created at ${new Date().toLocaleString()}`],
        })
      );
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded">
      <h3 className="text-xl font-bold mb-4">Add New Block</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Stage</label>
        <select
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        >
          {stages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Block
      </button>
    </form>
  );
};

export default AddBlock;
