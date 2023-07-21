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

const ServiceRouter = require('./routes/Services');
app.use("/service", ServiceRouter);

const JobRouter = require('./routes/Jobs');
app.use("/job", JobRouter);

const CustomerRouter = require('./routes/Customers');
app.use("/customer", CustomerRouter);
    
const CarRouter = require('./routes/Cars');
app.use("/car", CarRouter);

const AppointmentRouter = require('./routes/Appointments');
app.use("/appointment", AppointmentRouter);

const ProcessRouter = require('./routes/Processes');
app.use("/process", ProcessRouter);


const CartabRouter = require('./routes/CarTabs');
app.use("/cartab", CartabRouter);


const AppoitCardRouter = require('./routes/AppointmentCards');
app.use("/appointmentcard", AppoitCardRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
});