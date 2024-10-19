
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick() {
    alert('button Clicked');
  }

  const handleClick2 = () => {
    alert("button clicked 2 arrow function");
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>

      <h3>Learning React Concepts Part -2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <Friends></Friends>
      {/* <button onclick="handleClick()"></button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => alert("Third button clicked by arrow anonymous function")}>Click Me 3</button>
      <button onClick={() => addToFive(3)}>Click Me 4</button>

      

    </>
  )
}

export default App
