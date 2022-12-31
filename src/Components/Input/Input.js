import React, { useState } from "react";
import Error from "../Error/Error";
import styles from "./input.module.css";

const Input = (props) => {
  const {
    setDisplayTrain,
    setDisplayInput,
    setDisplayTickets,
    input,
    setInput,
    setNoOfBookedSeats,
    noOfBookedSeats,
  } = props;

  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function changeInput(e){
    setInput(e.target.value);
    console.log(input);
  }

  function bookTrain(e) {
    e.preventDefault();
    
    let input = parseInt(document.getElementById("input").value);

    // All edge cases and the error
    if (input < 1 || isNaN(input)) {
      setErrorMessage("Please enter the number of tickets you want to book.");
      setDisplayError(true);
    } else if (input > 7) {
      setErrorMessage("The maximum number of tickets allowed per user is seven.");      
      setDisplayError(true);
    } else if (noOfBookedSeats === 80) {
      setErrorMessage("Apologies, all the seats have been already booked.");
      setDisplayError(true);
    } else if (noOfBookedSeats + input > 80) {
      setErrorMessage(`Sorry, only ${80 - noOfBookedSeats} is/are available.`);
      setDisplayError(true);
    } else {
      setNoOfBookedSeats(noOfBookedSeats + input);
      console.log(noOfBookedSeats);
     
      setTimeout(() => {
        setDisplayInput(false);
        setDisplayTrain(false);
        setDisplayTickets(true);
      }, 500);
    }
  }

  return (
    <div className={styles.container}>
      <form >
        <input id="input" type="number" placeholder="Enter No Of Tickets" onChange={e=>{changeInput(e)}} />
        <button onClick={bookTrain} type="submit">
          Book Tickets
        </button>
      </form>
      {displayError && (
        <Error errorMessage={errorMessage} setDisplayError={setDisplayError} />
      )}
    </div>
  );
};

export default Input;
