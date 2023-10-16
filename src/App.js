
// import './App.css';

import userlook from "./userlook";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App()
{
  let{count,increment,decrement}=userlook();
  return(
    <>
    <h1>hemu</h1>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    
    </>
  );
}

export default App;
