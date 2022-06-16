import { store, dispatch } from "#src/models/store";
require('chai')
    .use(require('chai-as-promised'))
    .should()
const expect = require('chai').expect

const get_models_Search = () => store.getState().models_Search;

describe("models_Search", () => {
  // beforeEach(() => dispatch({ type: "RESET" }));

  // it("should return the initial state correctly", () => {
  //  expect( get_models_Search()).toEqual({ defaultState });
  // });
  // it("test each reducer", () => {
  //   dispatch.models_Search.reducerfunction({ stateKey: "expectedvalue" });
  //   expect(get_models_Search()).toEqual({
     
  //   });
  // });
})