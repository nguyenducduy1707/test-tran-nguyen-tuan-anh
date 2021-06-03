const detailProductSelector = (taskId) => (state) =>
  state?.test?.tasks?.products[taskId || ""] ?? {};

const detailModuleSelector = (taskId) => (state) =>
  state?.test?.tasks?.productModules[taskId || ""] ?? {};

export { detailProductSelector, detailModuleSelector };
