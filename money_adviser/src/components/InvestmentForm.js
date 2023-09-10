import React, { useState, useEffect } from "react";
import "./InvestmentForm.css"; // Import your CSS file for styling
import bg from "./bg.mp4";
import { useNavigate } from "react-router-dom";

function InvestmentForm() {
  //Nir - you can use this anytime ,anywhere 👇
  const navigate = useNavigate(); // use this navigate obj in this file, to navigate at any url u provided/Route in App.js
  //
  const [amountToInvest, setAmountToInvest] = useState("");
  const [answer, setAnswer] = useState("");
  const [goal, setGoal] = useState(""); // New state for the goal of investment
  const [submitted, setSubmitted] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the amount to invest is greater than zero
    if (amountToInvest <= 0) {
      alert("Amount to be invested must be greater than zero.");
      return;
    }

    // Verify the user's answer to the addition challenge
    if (parseInt(answer) === num1 + num2) {
      // Handle form submission here, e.g., submit the data to the server
      console.log("Amount to be Invested:", amountToInvest);
      console.log("Goal of Investment:", goal); // Log the goal of investment
      // Reset the form
      setAmountToInvest("");
      setAnswer("");
      setGoal(""); // Clear the goal input field
      setSubmitted(true);
      // Generate a new addition challenge
      generateRandomNumbers();
      // Redirect based on the entered amount
      // Routing Logic goes Here
      if (amountToInvest < 1000000) {
        navigate("/silverclub");
        //simple as that -> just enter route url pattern here u are done
      } else if (amountToInvest >= 1000000 && amountToInvest < 2500000) {
        navigate("/goldenclub");
      } else if (amountToInvest > 500000) {
        navigate("/platinumclub");
      }
    } else {
      alert("Incorrect answer. Please try again.");
      setAnswer("");
    }
  };

  return (
    <div>
      <center>
        <heading1>WELCOME TO MONEY ADVISER</heading1>
        <br />
        <heading2>ENTER THE AMOUNT TO BE INVESTED</heading2>
      </center>
      <div className="container">
        <div>
          <video src={bg} autoPlay loop muted className="video-background" />
          <div className="center">
            {submitted && <p>LOGIN IN SUCCESSFULLY!!</p>}
            <div className="form-group">
              <input
                type="number"
                id="amountToInvest"
                name="amountToInvest"
                value={amountToInvest}
                onChange={(e) => setAmountToInvest(e.target.value)}
                required
              />
            </div>
           {/* Goal of Investment input field */}
           <div className="form-group">
              <label htmlFor="goal">GOAL OF INVESTMENT</label>
              <input
                type="text"
                id="goal"
                name="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              />

            {/* Display the addition challenge */}
            <div className="form-group">
              <label htmlFor="additionChallenge">
                {num1} + {num2} = ?
              </label>
              <br/>
              <input
                type="number"
                id="additionChallenge"
                name="additionChallenge"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>

            </div>

            <div className="form-group">
              <button type="submit" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentForm;
