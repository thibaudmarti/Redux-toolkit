import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPicturesData: (state, { payload }) => {
      // action ou { payload } reviens au meme.
      state.pictures = payload; // si action mettre action.payload sinon payload suffit
    },
    addPictures: (state, { payload }) => {
      //   state.pictures = [...state.pictures, payload]; OU
      state.pictures.push(payload);
    },
    editPictures: (state, { payload }) => {
      state.pictures = state.pictures.map((pic) => {
        if (pic.id === payload[1]) {
          return {
            ...pic,
            artist: payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePictures: (state, { payload }) => {
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
  },
});

export const { setPicturesData, addPictures, editPictures, deletePictures } =
  picturesSlice.actions;
export default picturesSlice.reducer;
