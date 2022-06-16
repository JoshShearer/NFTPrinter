/* CREDITOR_GENERATED */
import { Models } from '@rematch/core';

import { models_Search } from '#src/models/Search';

export interface RootModel extends Models<RootModel> {
  models_Search: typeof models_Search;
}

export const models: RootModel = {
  models_Search,
}
