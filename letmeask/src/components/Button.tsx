export function Button() {
  let counter = 0;

  function increment() {
    counter += 1;
    console.log(counter);
  }
    return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}