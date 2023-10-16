export const debounce = (func: any, delay: any) => {
    let timeoutId: any;
    return function() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func, delay);
    };
  };