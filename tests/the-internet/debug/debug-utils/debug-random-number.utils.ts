export function generateRandomNumber(min = 5, max = 20): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
