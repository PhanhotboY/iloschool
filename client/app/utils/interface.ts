declare global {
  type Values<T> = T[keyof T];
}

export {};
