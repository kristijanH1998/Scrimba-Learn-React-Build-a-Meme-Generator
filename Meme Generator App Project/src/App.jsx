import Header from "./Header.jsx"
import Meme from "./Meme.jsx"

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App

//Event Listeners practice:
// export default function App() {
//   function handleClick() {
//       console.log("I was clicked!")
//   }
  
//   function handleOnMouseOver() {
//       console.log("MouseOver")
//   }
  
//   return (
//       <div className="container">
//           <img 
//               src="https://picsum.photos/640/360" 
//               onMouseOver={handleOnMouseOver} 
//           />
//           <button onClick={handleClick}>Click me</button>
//       </div>
//   )
// }

//React reacting to events by updating UI:
// export default function App() {
//   const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
  
//   function addItem() {
//       const newThingText = `Thing ${things.length + 1}`
//       setThings(prevState => [...prevState, newThingText])
//   }
  
//   const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
  
//   return (
//       <div>
//           <button onClick={addItem}>Add Item</button>
//           {thingsElements}
//       </div>
//   )
// }

//State example: counter
// export default function App() {
//   const [count, setCount] = React.useState(0)
//   /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
//   function add() {
//       setCount(prevCount => prevCount + 1)
//   }
//   // Challenge: update `substract` to use a callback function
  
//   function subtract() {
//       setCount(prevCount => prevCount - 1)
//   }
  
//   return (
//       <div className="counter">
//           <button className="counter--minus" onClick={subtract}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }