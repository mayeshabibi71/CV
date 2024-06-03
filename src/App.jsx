import { useState } from "react";



function App() {
  const [counter,setCounter]=useState(0);

  return (
    <div>
     <h1>Counter App</h1>
     <p>counter is {counter}</p>
     <button onClick={function(){setCounter(counter+1)}}>Increment</button>
     <button onClick={function(){setCounter(counter-1)}} disabled={counter<=0}>Decrement</button>
     <button onClick={function(){setCounter(0 )}}>Reset</button>
     </div>
  )
}

export default App
