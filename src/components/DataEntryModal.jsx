import { useDispatch } from "react-redux";
import { moveBlock } from "../redux/blocksSlice";
import { useState } from "react";

const DataEntryModal = ({ block, isOpen, onClose }) => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(moveBlock({ id: block.id, newStage: block.newStage, data }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Provide Data</h2>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DataEntryModal;
