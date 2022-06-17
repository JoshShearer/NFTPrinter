import { createModel, RematchDispatch } from '@rematch/core';
import type { RootModel } from '#src/models/model';

export interface asset {
  asset: {
    token_id: string,
    image_url: string,
    background_color: string,
    name: string,
    external_link: string,
    asset_contract: object,
    owner: object,
    traits: Array<T>,
    last_sale: string,
  }
}

type defaultState = {
  searchTerms: string,
  execSearch: boolean,
  assets: Array<asset>,
};

export const models_Search = createModel<RootModel>()({
  state: {
    searchTerms: '',
    execSearch: false,
    assets: [
      asset: {
        token_id: '',
        image_url: '',
        background_color: '',
        name: '',
        external_link: '',
        asset_contract: {},
        owner: {},
        traits: [],
        last_sale: '',
      }
    ],
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
