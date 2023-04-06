export function characterLimit(str: string, limit: number = 150): string {
  if (str.length > limit) {
    return str.slice(0, limit) + '...'
  }
  return str
}
