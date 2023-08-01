const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const db = require("./models");

const UserRouter = require('./routes/Users');
app.use("/user", UserRouter);

const OwnerRouter = require('./routes/Owners');
app.use("/owner", OwnerRouter);
  
const ManagerRouter = require('./routes/Managers');
app.use("/manager", ManagerRouter);

const CustomerRouter = require('./routes/Customers');
app.use("/customer", CustomerRouter);

const CusDataRouter = require('./routes/GetCusData');
app.use("/getcusdata", CusDataRouter);

const CarRouter = require('./routes/Cars');
app.use("/car", CarRouter);

const AppointmentRouter = require('./routes/Appointments');
app.use("/appointment", AppointmentRouter);

const AppointmentServiceRouter = require('./routes/AppointmentService');
app.use("/appointmentservice", AppointmentServiceRouter);
    
const ServiceRouter = require('./routes/Services');
app.use("/service", ServiceRouter);

const JobRouter = require('./routes/Jobs');
app.use("/job", JobRouter);

const JobCardRouter = require('./routes/JobCards');
app.use("/jobcards", JobCardRouter);

const IncomeRouter = require('./routes/Incomes');
app.use("/income", IncomeRouter);

// const LoginRouter = require('./routes/Login');
// app.use("/login", LoginRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
});