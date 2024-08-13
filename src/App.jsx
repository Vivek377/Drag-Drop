import { useState } from "react";
// import { useSelector } from "react-redux";
import Swimlane from "./components/Swimlane";
// import DataEntryModal from "./components/DataEntryModal";
import BlockPreview from "./components/BlockPreview";
import Filter from "./components/Filter";
import "./App.css";
import AddBlock from "./components/AddBlock";

function App() {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockForDataEntry, setBlockForDataEntry] = useState(null);

  // const blocks = useSelector((state) => state.blocks.blocks);

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  const handleBlockDrop = (block, newStage) => {
    setBlockForDataEntry({ ...block, newStage });
    setIsModalOpen(true);
  };

  const handleModalOpen = (block) => {
    setSelectedBlock(block);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setBlockForDataEntry(null);
  };

  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4 text-center text-2xl font-bold">
        Swimlane UI
      </header>
      <div className="p-4">
        {/* <Filter /> */}
        <AddBlock />
        <Swimlane
          onBlockClick={handleBlockClick}
          onBlockDrop={handleBlockDrop}
          handleModalOpen={handleModalOpen}
        />
        {/* {isModalOpen && (
          <DataEntryModal
            block={blockForDataEntry}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        )} */}
        {selectedBlock && (
          <BlockPreview
            block={selectedBlock}
            onClose={() => setSelectedBlock(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
