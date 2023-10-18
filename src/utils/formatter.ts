export function currencyFormatter(value: number) {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}

export function timeFormatterDay(time: number) {
  return new Intl.DateTimeFormat("pt-BR").format(time);
}

export function timeFormatterTime(time: number) {
  return new Intl.DateTimeFormat("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).format(time);
}
