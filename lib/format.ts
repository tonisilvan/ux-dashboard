export const currency = (n: number) => new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR"
}).format(n);
