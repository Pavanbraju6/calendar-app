// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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

// export default App;



import React from 'react';
import TimeSlots from './components/TimeSlots';
import BookingForm from './components/BookingForm'; // Uncomment if using BookingForm
import SelectSlots from './components/SelectSlots'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calendar App</h1>
      </header>
      <main>
        <TimeSlots />
        {/* <BookingForm /> */}
        {/* <SelectSlots /> */}
        {/* <BookingForm /> */} {/* Uncomment if using BookingForm */}
      </main>
    </div>
  );
}

export default App;
