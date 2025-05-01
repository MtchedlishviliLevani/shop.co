export function calculatePercentageChange(
  beforeSalePrice: number,
  nowPrice: number
) {
  const percentageChange =
    ((beforeSalePrice - nowPrice) / beforeSalePrice) * 100;
  return percentageChange.toFixed(1);
}
