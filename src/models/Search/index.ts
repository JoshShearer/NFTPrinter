import { createModel, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/models/model';
import { List } from 'postcss/lib/list';

export type asset = {
    token_id: string,
    image_url: string,
    background_color: string,
    name: string,
    external_link: string,
    asset_contract: object,
    owner: object,
    traits: List,
    last_sale: string
}

type defaultState = {
  searchTerms: string,
  execSearch: boolean,
  NFTData: Array<asset>,
};

export const models_Search = createModel<RootModel>()({
  state: {
    searchTerms: '',
    execSearch: false,
    NFTData: []
  } as defaultState,
  reducers: {
    setSearchTerms(state, payload: string) {
      return {
        ...state,
        searchTerms: payload,
      };
    },
    exSearch(state, payload: boolean) {
      return {
        ...state, 
        execSearch: payload,
      }
    },
    setNFTData(state, payload: Array<asset>) {
      return {
        ...state, 
        NFTData: payload,
      }
    }
  },
  // selectors: (slice, createSelector, hasProps) => ({

  // }),
  effects: (dispatch) => ({
    // async reducerRenameAsync(payload: string, state) {
    //   dispatch.models_Search.reducerRename(payload);
    // },
  }),
});
