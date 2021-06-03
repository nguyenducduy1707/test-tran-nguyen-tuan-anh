const initialState = {
  products: [
    {
      id: 0,
      name: 'product 0',
      prdFunction: 'fc 0',
      detail: 'detail 0',
      nigp: 'nigp 0',
      modules: [0, 1], // id của productModules
    },
  ],
  productModules: [
    {
      id: 0,
      label: 'module 0',
      name: 'data module 0',
      data: 'data 0',
      des: 'des 0',
    },
  ],
};

// eslint-disable-next-line no-unused-vars
export default function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_PRODUCT': {
      return null;
    }
    case 'CHANGE_PRODUCT': {
      return null;
    }
    case 'DELETE_PRODUCT': {
      return null;
    }
    case 'ADD_MODULE': {
      return null;
    }
    case 'CHANGE_MODULE': {
      return null;
    }
    case 'DELETE_MODULE': {
      return null;
    }

    default:
      return state;
  }
}
