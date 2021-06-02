export function addProduct(
  textName,
  textProductFunction,
  textDetail,
  textNigp
) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      name: textName,
      productFunction: textProductFunction,
      detail: textDetail,
      nigp: textNigp,
    },
  };
}

export function changeProduct(
  productSelected,
  name,
  productFunction,
  detail,
  nigp
) {
  return {
    type: "CHANGE_PRODUCT",
    payload: {
      id: productSelected.id,
      name: name,
      productFunction: productFunction,
      detail: detail,
      nigp: nigp,
    },
  };
}

export function deleteProduct(product) {
  return {
    type: "DELETE_PRODUCT",
    payload: { id: product.id },
  };
}

// Module
export function addModule(fieldLabel, fieldName, fieldData, fieldDes) {
  return {
    type: "ADD_MODULE",
    payload: {
      fieldLabel: fieldLabel,
      fieldName: fieldName,
      fieldData: fieldData,
      fieldDes: fieldDes,
    },
  };
}

export function deleteModule(module) {
  return {
    type: "DELETE_MODULE",
    payload: { id: module.id },
  };
}
