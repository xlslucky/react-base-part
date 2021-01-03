export function guid() {
  return `${Date.now()}_${Math.random().toString(32).substr(2, 8)}`
}

export function isEmpty(val: any) {
  return val === undefined || val === null || val === ''
}
