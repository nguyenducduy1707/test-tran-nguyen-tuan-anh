export function addProduct(textName, textfunction, textDetail, textNigp, productModules) {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      name: textName,
      prdFunction: textfunction,
      detail: textDetail,
      nigp: textNigp,
      productModules,
    },
  };
}

export function changeProduct(productSelected, name, prdFunction, detail, nigp) {
  return {
    type: 'CHANGE_PRODUCT',
    payload: {
      id: productSelected.id,
      name,
      prdFunction,
      detail,
      nigp,
    },
  };
}

export function deleteProduct(product) {
  return {
    type: 'DELETE_PRODUCT',
    payload: { id: product.id },
  };
}

// Module
export function addModule(moduleProtected, label, name, data, des) {
  return {
    type: 'ADD_MODULE',
    payload: {
      moduleProtectedId: moduleProtected.id,
      label,
      name,
      data,
      des,
    },
  };
}

export function changeModule(moduleSelected, label, name, data, des) {
  return {
    type: 'CHANGE_MODULE',
    payload: {
      id: moduleSelected,
      label,
      name,
      data,
      des,
    },
  };
}

export function deleteModule(module) {
  return {
    type: 'DELETE_MODULE',
    payload: { id: module.id },
  };
}
