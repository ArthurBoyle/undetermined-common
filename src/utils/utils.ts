const isObject = (param: unknown): boolean => {
  return Object.prototype.toString.call(param).slice(8, -1) === 'Object';
};

const isPromise = (param: unknown): boolean => {
  return Object.prototype.toString.call(param).slice(8, -1) === 'Promise';
};

export default { isObject, isPromise };
