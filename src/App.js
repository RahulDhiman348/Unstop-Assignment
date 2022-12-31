import { useState, useRef } from "react";
import "./App.css";
import Train from "./Components/Train/Train";
import Input from "./Components/Input/Input";
import DisplayTickets from "./Components/DisplayTickets/DisplayTickets";



function App() {
  const [displayTrain, setDisplayTrain] = useState(true);
  const [displayInput, setDisplayInput] = useState(true);
  const [displayTickets, setDisplayTickets] = useState(false);
  const [input, setInput] = useState(0);  
  const [noOfBookedSeats, setNoOfBookedSeats] = useState(0);     

  const bookedSeats = useRef([]);
  // to store the number of seats
  const seatsLeftInRow = useRef([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3]);

  

  return (
    <div className="App">
      {displayTrain && <Train />}
      {displayInput && (
        <Input
          setInput={setInput}
          input = {input}
          setDisplayInput={setDisplayInput}
          setDisplayTrain={setDisplayTrain}
          setDisplayTickets={setDisplayTickets}
          noOfBookedSeats={noOfBookedSeats}
          setNoOfBookedSeats = {setNoOfBookedSeats}
        />
      )}
      {displayTickets && (
        <DisplayTickets
          seatsLeftInRow={seatsLeftInRow}
          bookedSeats={bookedSeats}
          input={input}
          setDisplayInput={setDisplayInput}
          setDisplayTrain={setDisplayTrain}
          setDisplayTickets={setDisplayTickets}
        />
      )}
    </div>
  );
}

export default App;
