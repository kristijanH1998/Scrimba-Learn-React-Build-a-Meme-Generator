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

//Challenge: flipping state back and forth
// export default function App() {
//   const [isGoingOut, setIsGoingOut] = React.useState(true)
//   function changeMind() {
//       setIsGoingOut(prevState => !prevState)
//   }
  
//   return (
//       <div className="state">
//           <h1 className="state--title">Do I feel like going out tonight?</h1>
//           <div onClick={changeMind} className="state--value">
//               <h1>{isGoingOut ? "Yes" : "No"}</h1>
//           </div>
//       </div>
//   )
// }

//Complex state: arrays
// export default function App() {
//   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  
//   function addItem() {
//       setThingsArray(prevState => {
//           return [...prevState, `Thing ${prevState.length + 1}`]
//       })
//   }
  
//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
//   return (
//       <div>
//           <button onClick={addItem}>Add Item</button>
//           {thingsElements}
//       </div>
//   )
// }

//Updating State Objects:
// import Star from "./Star"

// export default function App() {
//   const [contact, setContact] = React.useState({
//       firstName: "John",
//       lastName: "Doe",
//       phone: "+1 (719) 555-1212",
//       email: "itsmyrealname@example.com",
//       isFavorite: true
//   })
  
//   function toggleFavorite() {
//       setContact(prevContact => ({
//           ...prevContact,
//           isFavorite: !prevContact.isFavorite
//       }))
//   }
  
//   return (
//       <main>
//           <article className="card">
//               <img src="./images/user.png" className="card--image" />
//               <div className="card--info">
//                   <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
//                   <h2 className="card--name">
//                       {contact.firstName} {contact.lastName}
//                   </h2>
//                   <p className="card--contact">{contact.phone}</p>
//                   <p className="card--contact">{contact.email}</p>
//               </div>
              
//           </article>
//       </main>
//   )
// }

//Boxes challenge:
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     function toggle(id) {
//         setSquares(prevSquares => {
//             return prevSquares.map((square) => {
//                 return square.id === id ? {...square, on: !square.on} : square
//             })
//         })
//     }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id} 
//             on={square.on} 
//             toggle={() => toggle(square.id)}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

//Sign up form practice code:
// import React from "react"

// export default function App() {
//     const [formData, setFormData] = React.useState({
//         email: "",
//         password: "",
//         passwordConfirm: "",
//         joinedNewsletter: true
//     })
    
//     function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: type === "checkbox" ? checked : value
//         }))
//     }
    
//     function handleSubmit(event) {
//         event.preventDefault()
//         if(formData.password === formData.passwordConfirm) {
//             console.log("Successfully signed up")
//         } else {
//             console.log("Passwords do not match")
//             return
//         }
        
//         if(formData.joinedNewsletter) {
//             console.log("Thanks for signing up for our newsletter!")
//         }
//     }
    
//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     placeholder="Email address"
//                     className="form--input"
//                     name="email"
//                     onChange={handleChange}
//                     value={formData.email}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password"
//                     className="form--input"
//                     name="password"
//                     onChange={handleChange}
//                     value={formData.password}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Confirm password"
//                     className="form--input"
//                     name="passwordConfirm"
//                     onChange={handleChange}
//                     value={formData.passwordConfirm}
//                 />
                
//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"
//                         name="joinedNewsletter"
//                         onChange={handleChange}
//                         checked={formData.joinedNewsletter}
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button 
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
//             </form>
//         </div>
//     )
// }

//Star Wars API example with useEffect:
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
  
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch(`https://swapi.dev/api/people/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

//Window Tracker example:
// import React from "react"
// import WindowTracker from "./WindowTracker"

// export default function App() {
    
//     const [show, setShow] = React.useState(true)
    
//     function toggle() {
//         setShow(prevShow => !prevShow)
//     }
    
//     return (
//         <div className="container">
//             <button onClick={toggle}>
//                 Toggle WindowTracker
//             </button>
//             {show && <WindowTracker />}
//         </div>
//     )
// }