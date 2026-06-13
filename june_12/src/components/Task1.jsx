function Task1() {
  const frontend = ["HTML", "CSS", "JavaScript"];
  const backend = ["Node.js", "MongoDB"];

  const fullStack = [...frontend, ...backend];

  return (
    <div>
      <h2>Task 1 - Spread Operator</h2>
      <p>{fullStack.join(", ")}</p>
    </div>
  );
}

export default Task1;