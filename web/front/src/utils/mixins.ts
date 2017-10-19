export const $timeout = (callback: any, duration: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(callback), duration);
  })
};