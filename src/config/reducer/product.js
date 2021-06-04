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

function nextProductId(tasks) {
  return Object.values(tasks).length;
}

export default function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_PRODUCT': {
      const id = nextProductId(state.products);
      const { name, prdFunction, detail, nigp, productModules } = payload;
      return {
        ...state,
        products: [
          ...state.products,
          {
            id,
            name,
            prdFunction,
            detail,
            nigp,
            productModules,
          },
        ],
      };
    }
    case 'CHANGE_PRODUCT': {
      const { id, name, prdFunction, detail, nigp } = payload;
      return {
        ...state,
        products: state.products.map((content, i) =>
          i === id ? { ...content, name, prdFunction, detail, nigp } : content
        ),
      };
    }
    case 'DELETE_PRODUCT': {
      return {
        ...state,
        products: state.products.filter((todo) => todo.id !== payload.id),
      };
    }
    case 'ADD_MODULE': {
      const id = nextProductId(state.productModules);
      const { label, name, data, nigp, des } = payload;
      return {
        ...state,
        productModules: [
          ...state.productModules,
          {
            id,
            label,
            name,
            data,
            nigp,
            des,
          },
        ],
      };
    }
    case 'CHANGE_MODULE': {
      const { id, label, name, data, des } = payload;
      return {
        ...state,
        productModules: state.productModules.map((content, i) =>
          i === id ? { ...content, name, label, data, des } : content
        ),
      };
    }
    case 'DELETE_MODULE': {
      return {
        ...state,
        productModules: state.productModules.filter((todo) => todo.id !== payload.id),
      };
    }

    default:
      return state;
  }
}
