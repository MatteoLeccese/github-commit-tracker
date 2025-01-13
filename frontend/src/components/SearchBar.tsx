import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RepositorySearchState, RootStoreState } from '../interfaces/store.interfaces';
import { fetchGithubCommits } from '../store/commitHistorySlice';
import { AppDispatch } from '../store/store';
import { FormEvent, useCallback } from 'react';

export const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, repo } = useSelector((state: RootStoreState) => state.repositorySearch);

  const { register } = useForm<RepositorySearchState>({
    defaultValues: {
      user,
      repo,
    },
  })

  const handleOnSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formObject: RepositorySearchState = Object.fromEntries(formData.entries()) as unknown as RepositorySearchState;
    dispatch(fetchGithubCommits(formObject.user, formObject.repo));
  }, [ dispatch ]);

  return (
    <form
      className="w-full flex flex-row align-middle justify-around"
      onSubmit={(e) => handleOnSubmit(e)}
    >
      <input
        className="w-2/5 border-2 border-blue-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        placeholder="GitHub user here"
        required
        type="text"
        {...register("user", { required: true, maxLength: 20, max: 20 })}
      />
      <input
        className="w-2/5 border-2 border-blue-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        placeholder="GitHub repository here"
        required
        type="text"
        {...register("repo", { required: true, maxLength: 20, max: 20 })}
      />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        value="Search"
      />
    </form>
  )
};
