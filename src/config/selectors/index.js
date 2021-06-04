const detailProductSelector = (taskId) => (state) => state?.product?.products[taskId] ?? {};

const detailModuleSelector = (taskId) => (state) =>
  state.product.productModules[taskId || ''] ?? {};

export { detailProductSelector, detailModuleSelector };
