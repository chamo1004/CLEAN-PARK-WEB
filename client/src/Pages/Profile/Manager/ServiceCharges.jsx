import React, { useState, useEffect } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import "./servicecharges.css"; // Import the CSS file for styling
import logo from "../../../img/logo.jpg";

const LogoImage = () => <Image src={`${logo}`} style={styles.logo} />;

const DailyIncome = () => {
  // State variables
  const [date, setDate] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [paymentPrice, setPaymentPrice] = useState("");
  const [payments, setPayments] = useState([]);
  const [dailyIncome, setDailyIncome] = useState(0);

  // Function to handle form submission when adding a payment
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

  // Function to handle payment price input change and allow only numbers
  const handlePaymentChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setPaymentPrice(value);
    }
  };

  // Calculate daily income whenever payments change
  useEffect(() => {
    const totalIncome = payments.reduce(
      (total, payment) => total + payment.paymentPrice,
      0
    );
    setDailyIncome(totalIncome);
  }, [payments]);

  // Function to generate the PDF content
  const generatePDF = () => (
    <Document>
      <Page style={styles.page}>
        {/* Custom header */}
        <View style={styles.header}>
          <LogoImage />
          <Text style={styles.headerText}>Daily Income Report</Text>
          <Text style={styles.serviceStationName}>
            -Clean Park Auto Service Center-
          </Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>

        {/* Custom content */}
        <View style={styles.content}>
          <Text style={styles.totalIncomeText}>
            Total Income (Rs): {dailyIncome.toFixed(2)}
          </Text>
          <Text style={styles.paymentsHeader}>Payments:</Text>
          <View style={styles.paymentsList}>
            {payments.map((payment, index) => (
              <Text key={index} style={styles.paymentItem}>
                {payment.vehicleNumber}, Payment (Rs):{" "}
                {payment.paymentPrice.toFixed(2)}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  const currentDate = new Date().toISOString().split("T")[0];

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
            min={currentDate} // Set the min attribute to prevent previous days
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
          <button
            type="submit"
            style={{
              border: "2px solid red",
              backgroundColor: "transparent",
              color: "red",
            }}
          >
            Add Payment
          </button>
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
        {/* PDFDownloadLink component to trigger PDF download */}

        <button onClick={handleSubmission}>Submit Daily Income</button>
        <PDFDownloadLink
          document={generatePDF()}
          fileName={`daily_income_${date}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Generating PDF..." : <button>Download PDF</button>
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
  },
  header: {
    marginBottom: 20,
    flexDirection: "column", // Change to column to stack the elements vertically
    alignItems: "center",
  },
  logo: {
    width: 70, // Adjust the logo width as needed
    height: 70, // Adjust the logo height as needed
    marginBottom: 8, // Add spacing between logo and headerText
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8, // Add spacing between headerText and serviceStationName
  },
  serviceStationName: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 4, // Add spacing between serviceStationName and dateText
  },
  dateText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
  },
  content: {
    marginBottom: 20,
  },
  totalIncomeText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
  },
  paymentsHeader: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paymentsList: {},
  paymentItem: {
    fontSize: 11,
    marginBottom: 4,
  },
});

export default DailyIncome;
