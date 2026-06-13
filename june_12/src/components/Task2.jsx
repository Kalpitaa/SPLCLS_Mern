function Task2() {
  function totalMarks(...marks) {
    let total = 0;

    for (let mark of marks) {
      total += mark;
    }

    return total;
  }

  console.log(totalMarks(80, 90, 70, 60));

  return <h2>Check Console for Output</h2>;
}

export default Task2;