import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { CommitHistory } from "../interfaces/github.interfaces";
import { RootStoreState } from "../interfaces/store.interfaces";
import CommitEntry from "../components/CommitEntry";
import { SearchBar } from "../components/SearchBar";

export const Index: FunctionComponent = () => {
  const { hasErrors, commitHistory } = useSelector((state: RootStoreState) => state.commitHistory);

  return (
    <div className="w-[100%] h-screen p-10 flex flex-col gap-2 items-center">
      <h1 className="text-3xl font-bold tracking-normal">Github Commit Tracker</h1>
      <SearchBar />
      { 
        commitHistory && Array.isArray(commitHistory) && commitHistory.length !== 0 ? (
          commitHistory.map((commitHistory: CommitHistory) => <CommitEntry key={commitHistory.node_id} commitHistory={commitHistory} />) 
        ) : (
          <div className="w-[100%] h-auto m-auto p-2 flex flex-col gap-2 items-center">
            <img
              className="w-[250px] m-auto"
              src={hasErrors ? "/error.png" : "/search.png"}
              alt="search"
            />
            <p>{hasErrors ? "The project does not exist" : "Search a project!"}</p>
          </div>
        )
      }
    </div>
  );
};
