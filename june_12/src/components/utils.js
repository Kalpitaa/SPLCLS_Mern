export function calculateTotalMarks(...marks) {
  let total = 0;

  for (let mark of marks) {
    total += mark;
  }

  return total;
}