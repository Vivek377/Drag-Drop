const BlockPreview = ({ block, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Block Details</h2>
        <p>{block.content}</p>
        <h3 className="text-lg font-semibold mt-4">History</h3>
        <ul>
          {block.history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BlockPreview;
