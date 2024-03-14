export function formatNumber_UTIL(number: number | string): string {
  if (number?.toString()?.split('.')[1]?.length > 2) {
    number = (+number).toFixed(2);
  }
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}