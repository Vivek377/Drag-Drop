const Block = ({ block, handleModalOpen }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", block.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onClick={() => handleModalOpen(block)}
      className="bg-white p-4 mb-4 shadow rounded"
    >
      <p>{block.content}</p>
    </div>
  );
};

export default Block;
