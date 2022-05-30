export const wait = (callback, time) => new Promise(() => setTimeout(callback(), time));
