import { CommitHistory } from "./github.interfaces";

export interface CommitHistoryState {
  commitHistory: CommitHistory[];
  hasErrors: boolean;
}

export interface RepositorySearchState {
  user: string;
  repo: string;
}

export interface RootStoreState {
  commitHistory: CommitHistoryState;
  repositorySearch: RepositorySearchState;
}
