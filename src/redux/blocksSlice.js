import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blocks: [],
  stages: ["To Do", "In Progress", "Done"],
  filters: {},
};

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action) => {
      state.blocks.push(action.payload);
    },
    moveBlock: (state, action) => {
      const { id, newStage } = action.payload;
      const block = state.blocks.find((block) => block.id === id);
      if (block) {
        block.stage = newStage;
        block.history.push(`Moved to ${newStage} at ${new Date().toLocaleString()}`);
      }
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { addBlock, moveBlock, setFilter } = blocksSlice.actions;

export default blocksSlice.reducer;
