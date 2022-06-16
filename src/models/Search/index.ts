import { createModel, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/models/model';

type defaultState = {
  searchTerms: string,
  execSearch: boolean,
};

export const models_Search = createModel<RootModel>()({
  state: {
    searchTerms: '',
    execSearch: false,
  } as defaultState,
  reducers: {
    setSearch(state, payload: string){
      return {
        ...state,
        searchTerms: payload,
      };
    },
    exSearch(state, payload: boolean){
      return {
        ...state, 
        execSearch: payload,
      }
    },
  },
  // selectors: (slice, createSelector, hasProps) => ({

  // }),
  effects: (dispatch) => ({
    // async reducerRenameAsync(payload: string, state) {
    //   dispatch.models_Search.reducerRename(payload);
    // },
  }),
});
