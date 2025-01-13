import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RepositorySearchState } from "../interfaces/store.interfaces";


const initialState: RepositorySearchState = {
  user: '',
  repo: '',
};

const repositorySearchSlice = createSlice({
  name: 'commitHistorySlice',
  initialState,
  reducers: {
    getUserAndRepoFromForm(state, action: PayloadAction<RepositorySearchState>) {
      state.user = action.payload.user;
      state.repo = action.payload.repo;
    },
  }
})

export const { getUserAndRepoFromForm } = repositorySearchSlice.actions;

export default repositorySearchSlice;