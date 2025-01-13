import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommitHistoryState } from "../interfaces/store.interfaces";
import { AppDispatch } from "./store";

const initialState: CommitHistoryState = {
  commitHistory: [],
  hasErrors: false,
};

const commitHistorySlice = createSlice({
  name: 'commitHistorySlice',
  initialState,
  reducers: {
    getAllCommitsFromRepo(state, action: PayloadAction<CommitHistoryState>) {
      state.commitHistory = action.payload.commitHistory;
      state.hasErrors = action.payload.hasErrors;
    },
  }
});

export const fetchGithubCommits = (user: string, repo: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/github?user=${user}&repository=${repo}`
      );
      const data = await res.json();
      if ("status" in data && data.status !== 200) {
        throw Error("Project not found");
      }
      dispatch(getAllCommitsFromRepo({
        commitHistory: data,
        hasErrors: false,
      }));
    } catch (err) {
      dispatch(getAllCommitsFromRepo({
        commitHistory: [],
        hasErrors: true,
      }));
    }
  };
};

export const { getAllCommitsFromRepo } = commitHistorySlice.actions;

export default commitHistorySlice;