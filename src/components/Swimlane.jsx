import { useSelector, useDispatch } from "react-redux";
import { moveBlock } from "../redux/blocksSlice";
import Block from "./Block";

const Swimlane = ({ handleModalOpen }) => {
  const stages = useSelector((state) => state.blocks.stages);
  const blocks = useSelector((state) => state.blocks.blocks);
  const dispatch = useDispatch();

  const handleDrop = (e, newStage) => {
    const id = e.dataTransfer.getData("id");
    dispatch(moveBlock({ id, newStage }));
  };

  return (
    <div className="flex space-x-4">
      {stages.map((stage) => (
        <div
          key={stage}
          onDrop={(e) => handleDrop(e, stage)}
          onDragOver={(e) => e.preventDefault()}
          className="w-1/3 bg-gray-200 p-4"
        >
          <h3 className="text-xl font-bold mb-4">{stage}</h3>
          {blocks
            .filter((block) => block.stage === stage)
            .map((block) => (
              <Block
                key={block.id}
                handleModalOpen={handleModalOpen}
                block={block}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Swimlane;
