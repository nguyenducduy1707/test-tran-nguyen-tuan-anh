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

export function changeProduct(productSelected, name, prdFunction, detail, nigp, productModules) {
  return {
    type: 'CHANGE_PRODUCT',
    payload: {
      id: productSelected.id,
      name,
      prdFunction,
      detail,
      nigp,
      productModules,
    },
  };
}

export function deleteProduct(id) {
  return {
    type: 'DELETE_PRODUCT',
    payload: { id },
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

export function deleteModule(id) {
  return {
    type: 'DELETE_MODULE',
    payload: { id },
  };
}
