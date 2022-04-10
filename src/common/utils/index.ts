export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function debounce<F extends (...args: any) => any>(func: F, ms: number) {
  let timer: null | NodeJS.Timeout = null;
  return function (this: any, ...arg: Parameters<F>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, ms, ...arguments);
    return timer;
  };
}
