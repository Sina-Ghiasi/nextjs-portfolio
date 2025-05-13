export function truncateString(str: string, maxLength: number): string {
  if (typeof str !== "string" || maxLength <= 0) return "";
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
}

export function toPersianDigits(input: number | string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return input.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}
