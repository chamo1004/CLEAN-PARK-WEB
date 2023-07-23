import React, { useState, useEffect } from "react";
import "./servicecharges.css"; // Import the CSS file for styling

const DailyIncome = () => {
  const [date, setDate] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [paymentPrice, setPaymentPrice] = useState("");
  const [payments, setPayments] = useState([]);
  const [dailyIncome, setDailyIncome] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new payment object with vehicleNumber and paymentPrice
    const newPayment = {
      vehicleNumber: vehicleNumber,
      paymentPrice: parseFloat(paymentPrice),
    };

    // Add the new payment to the existing payments list
    setPayments([...payments, newPayment]);

    // Reset form inputs
    setVehicleNumber("");
    setPaymentPrice("");
  };

  const handleSubmission = () => {
    // You can implement the submission logic here to send the data to the backend
    console.log("Daily income submitted:", {
      date: date,
      dailyIncome: dailyIncome,
      payments: payments,
    });
    // Reset the form and state after submission
    setDate("");
    setVehicleNumber("");
    setPaymentPrice("");
    setPayments([]);
    setDailyIncome(0);
  };

  const handlePaymentChange = (e) => {
    // Allow only numbers in the payment field
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setPaymentPrice(value);
    }
  };

  useEffect(() => {
    // Calculate daily income by adding all payment prices whenever payments change
    const totalIncome = payments.reduce(
      (total, payment) => total + payment.paymentPrice,
      0
    );
    setDailyIncome(totalIncome);
  }, [payments]);

  return (
    <div className="daily-income">
      <h2>Daily Income Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="paymentPrice">Payment (Rs):</label>
          <input
            type="text"
            id="paymentPrice"
            value={paymentPrice}
            onChange={handlePaymentChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Payment</button>
        </div>
      </form>
      <div className="payment-list">
        <h3>Payments for {date}</h3>
        <ul>
          {payments.map((payment, index) => (
            <li key={index}>
              Vehicle Number: {payment.vehicleNumber}, Payment (Rs):{" "}
              {payment.paymentPrice.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className="total-income">
        <h3>Daily Income (Rs): {dailyIncome.toFixed(2)}</h3>
        <button onClick={handleSubmission}>Submit Daily Income</button>
      </div>
    </div>
  );
};

export default DailyIncome;
