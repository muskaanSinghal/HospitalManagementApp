import name from "./index";

const welcome = document.querySelector(".welcome");
const staffNum = 500;
const doctorNum = 450;
const patientNum = 620;

//chart ...........................................................
const data = [
  { x: "Staff", value: `${staffNum}` },
  { x: "doctor", value: `${doctorNum}` },
  { x: "patients", value: `${patientNum}` },
];
const chart = anychart.column(data);
// chart.column(data);
chart.title("Hospital statistics");
chart.container("container");
chart.draw();
//chart ends .................................................................
