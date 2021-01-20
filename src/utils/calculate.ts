const tenPower = (power = 2) => (str: string | number = 0) =>
  parseInt(parseFloat(`${str}`).toFixed(power).replace('.', ''), 10)

export const yuan2fen = tenPower(2)

// 加
export const sumFloat = (power = 2) => (...args: Array<string | number>) => {
  // 1.113 + 1.114 = 2.227 -> 2.23 正确
  // 不给 power 加 1 算出结果就是 2.22
  const newPower = power + 1
  const toInt = tenPower(newPower)
  const value =
    args.reduce<number>((total, next) => total + toInt(next), 0) /
    10 ** newPower
  return value.toFixed(power)
}

// 乘
export const productFloat = (power = 2) => (
  ...args: Array<string | number>
) => {
  const newPower = power + 1
  const toInt = tenPower(newPower)
  const value =
    args.reduce<number>((total, next) => total * toInt(next), 1) /
    10 ** (newPower * args.length)
  return value.toFixed(power)
}
