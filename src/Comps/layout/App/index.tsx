import React from 'react';
import { Comps_layout_NFTainer } from '../NFTainer';
import { Comps_misc_Spinner } from '#src/Comps/misc/spinner';
// import useSelector from 'reselect';

import { createStructuredSelector } from '#src/models/utils';
import { useSelector } from '#src/models/hooks';

import { RootState, Actions, dispatch, store } from '#src/models/store';

import { Comps_Navigation_Header } from '#src/Comps/Navigation/Header';
import { Comps_Navigation_Footer } from '#src/Comps/Navigation/Footer';
import { XIcon } from '@heroicons/react/outline';

const handleSearch = (search: string) => {
  const options = {method: 'GET', headers: {Accept: 'application/json'}};

  fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&limit=20&include_orders=false', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  };

const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};
const selector = createStructuredSelector({
  search: (root) => root.models_Search.execSearch,
  searchTerms: (root) => root.models_Search.searchTerms,
});

export const Comps_layout_App = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };
  const selected = useSelector((state) => selector(state, props));

  return (
    <div className="Comps_layout_App">
      <Comps_Navigation_Header />
      <p className="text-white">Comps_layout_App</p>
      <button className="inline-flex px-2 py-3 text-base font-medium text-white bg-stone-800 border border-transparent rounded-md shadow-sm items-right hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Mint Unique NFT
      </button>
      <Comps_Navigation_Footer />
    </div>
  );
};

// export class Comps_layout_App extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <div>Comps_layout_App</div>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));
