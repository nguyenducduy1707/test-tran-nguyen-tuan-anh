const detailProductSelector = (taskId) => (state) =>
  state?.test?.tasks?.products[taskId || ""] ?? {};

const detailModuleSelector = (taskId) => (state) =>
  state?.test?.tasks?.products[taskId || ""] ?? {};

export { detailProductSelector, detailModuleSelector };
