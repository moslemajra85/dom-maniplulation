export function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const pivot = numbers[Math.floor(numbers.length / 2)];
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  for (const number of numbers) {
    if (number < pivot) {
      less.push(number);
    } else if (number > pivot) {
      greater.push(number);
    } else {
      equal.push(number);
    }
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

const values = [8, 3, 1, 7, 0, 10, 2, 3];

console.log("Original:", values);
console.log("Sorted:", quickSort(values));
