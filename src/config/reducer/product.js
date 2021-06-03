const initialState = {
  tasks: {
    products: {
      0: {
        id: 0,
        name: "product 0",
        productFunction: "fc 0",
        detail: "detail 0",
        nigp: "nigp 0",
        productModules: {
          0: {
            id: 0,
          },
          1: {
            id: 1,
          },
        }, // id của productModules
      },
      1: {
        id: 1,
        name: "product 1",
        productFunction: "fc 1",
        detail: "detail 1",
        nigp: "nigp 1",
        productModules: {
          0: {
            id: 0,
          },
        }, // id của productModules
      },
    },
    productModules: {
      0: {
        id: 0,
        fieldLabel: "module 0",
        fieldName: "data module 0",
        fieldData: "fieldData 0",
        fieldDes: "fieldDes 0",
      },
      1: {
        id: 1,
        fieldLabel: "module 1",
        fieldName: "data module 1",
        fieldData: "fieldData 1",
        fieldDes: "fieldDes 1",
      },
    },
  },
};

function nextProductId(tasks) {
  return Object.values(tasks).length;
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const id = nextProductId(state.tasks.products);
      const { name, productFunction, detail, nigp, productModules } =
        action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          products: {
            ...state.tasks.products,
            [id]: {
              id: id,
              name: name,
              productFunction: productFunction,
              detail: detail,
              nigp: nigp,
              productModules: productModules,
            },
          },
        },
      };
    }
    case "CHANGE_PRODUCT": {
      const { id, name, productFunction, detail, nigp } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          products: {
            ...state.tasks.products,
            [id]: {
              ...(state.tasks.products[id] ?? {}),
              name: name ?? "",
              productFunction: productFunction ?? "",
              detail: detail ?? "",
              nigp: nigp ?? "",
            },
          },
        },
      };
    }
    case "DELETE_PRODUCT": {
      const { [action.payload.id]: taskWillBeDelete, ...products } =
        state.tasks.products;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          products: {
            ...products,
          },
        },
      };
    }
    case "ADD_MODULE": {
      const id = nextProductId(state.tasks.productModules);
      const { moduleProtectedId, fieldLabel, fieldName, fieldData, fieldDes } =
        action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          products: {
            ...state.tasks.products,
            [moduleProtectedId]: {
              ...(state.tasks.products[moduleProtectedId] ?? {}),
              productModules: {
                ...state.tasks.products[moduleProtectedId].productModules,
                [id]: {
                  id: id,
                },
              },
            },
          },
          productModules: {
            ...state.tasks.productModules,
            [id]: {
              id: id,
              fieldLabel: fieldLabel,
              fieldName: fieldName,
              fieldData: fieldData,
              fieldDes: fieldDes,
            },
          },
        },
      };
    }
    case "CHANGE_MODULE": {
      const { id, fieldLabel, fieldName, fieldData, fieldDes } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          productModules: {
            ...state.tasks.productModules,
            [id]: {
              ...(state.tasks.productModules[id] ?? {}),
              fieldLabel: fieldLabel ?? "",
              fieldName: fieldName ?? "",
              fieldData: fieldData ?? "",
              fieldDes: fieldDes ?? "",
            },
          },
        },
      };
    }
    case "DELETE_MODULE": {
      const { [action.payload.id]: taskWillBeDelete, ...productModules } =
        state.tasks.productModules;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          productModules: {
            ...productModules,
          },
        },
      };
    }

    default:
      return state;
  }
}
