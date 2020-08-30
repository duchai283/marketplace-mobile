export const formatMoney = money => {
  if (!money) {
    return '0 đ'
  }
  return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}
