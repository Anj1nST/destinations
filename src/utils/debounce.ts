export const debounce = (func: any, delay: any) => {
  setTimeout(() => {
    func();
  }, delay);
};
