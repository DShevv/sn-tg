export function getUserLocate(langCode) {
  return `${langCode}-${langCode.toUpperCase()}`;
}

export function getCurrencySymbol(locale, currency) {
  return (0)
    .toLocaleString(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
}
