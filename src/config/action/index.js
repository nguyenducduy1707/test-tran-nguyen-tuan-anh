export function addProduct(
  textName,
  textProductFunction,
  textDetail,
  textNigp,
  productModules
) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      name: textName,
      productFunction: textProductFunction,
      detail: textDetail,
      nigp: textNigp,
      productModules: productModules,
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
export function addModule(
  moduleProtected,
  fieldLabel,
  fieldName,
  fieldData,
  fieldDes
) {
  return {
    type: "ADD_MODULE",
    payload: {
      moduleProtectedId: moduleProtected.id,
      fieldLabel: fieldLabel,
      fieldName: fieldName,
      fieldData: fieldData,
      fieldDes: fieldDes,
    },
  };
}

export function changeModule(
  moduleSelected,
  fieldLabel,
  fieldName,
  fieldData,
  fieldDes
) {
  return {
    type: "CHANGE_MODULE",
    payload: {
      id: moduleSelected,
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
