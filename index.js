//btn
const logInBtn = document.querySelector(".logIn");
const returnBtn = document.querySelector(".returnBtn");
const submitBtn = document.querySelector(".submitBtn");
const staffSubmitBtn = document.querySelector(".staffSubmitBtn");
const adminSubmitBtn = document.querySelector(".adminSubmitBtn");
const doctorSubmitBtn = document.querySelector(".doctorSubmitBtn");
const staffAdder = document.querySelector(".staffAdder");
const doctorAdder = document.querySelector(".doctorAdder");
const adminAdder = document.querySelector(".adminAdder");
const addUserBtn = document.querySelector(".addUserBtn");
const adminReturnBtn = document.querySelector(".adminReturnBtn");
const staffReturnBtn = document.querySelector(".staffReturnBtn");
const staffViewPatientBtn = document.querySelector(".staffViewPatientBtn");
const staffRegisterBtn = document.querySelector(".staffRegisterBtn");
const staffAddPatientBtn = document.querySelector(".staffAddPatientBtn");
const editRecoveryRateBtn = document.querySelector(".editRecoveryRateBtn");
const formEditRecoveryBtn = document.querySelector(".formEditRecoveryBtn");
const doctorViewPatientBtn = document.querySelector(".doctorViewPatientBtn");
const doctorReturnBtn = document.querySelector(".doctorReturnBtn");

//container
const tabsContainer = document.querySelector(".tabsContainer");
const welcomeContainer = document.querySelector(".welcomeContainer");
const tabContainerNodeList = document.querySelectorAll(".tabContainer");
const header = document.querySelector(".header");
const tabContainerArray = [...tabContainerNodeList];
const adminPortal = document.querySelector(".adminPortal");
const firstPage = document.querySelector(".firstPage");
const secondPage = document.querySelector(".secondPage");
const thirdPage = document.querySelector(".adminSection");
const adminWelcomeNote = document.querySelector(".adminWelcomeNote");
const adderForm = document.querySelector(".form");
const chartContainer = document.querySelector("#container");
const staffChartContainer = document.querySelector("#container1");
const staffsection = document.querySelector(".staffSection");
const staffWelcomeNote = document.querySelector(".staffWelcomeNote");
const staffSection = document.querySelector(".staffSection");
const staffFormContainer = document.querySelector(".staffFormContainer");
const lineChartContainer = document.querySelector(".lineChartContainer");
const doctorLineChartContainer = document.querySelector(
  ".doctorLineChartContainer"
);
const viewPatient = document.querySelector(".viewPatient");
let currentAccount;

//inputs
const adminNameInput = document.querySelector(".adminNameInput");
const doctorNameInput = document.querySelector(".doctorNameInput");
const staffNameInput = document.querySelector(".staffNameInput");
const adminPassInput = document.querySelector(".adminPassInput");
const doctorPassInput = document.querySelector(".doctorPassInput");
const staffPassInput = document.querySelector(".staffPassInput");
const ageValue = document.querySelector(".ageValue");
const nameValue = document.querySelector(".nameValue");
const genderValue = document.querySelector(".genderValue");
const portalsContainer = document.querySelector(".portalsContainer");
const passwordValue = document.querySelector(".passwordValue");
const staffPortalNameInput = document.querySelector(".staffPortalNameInput");
const staffPortalAgeInput = document.querySelector(".staffPortalAgeInput");
const staffPortalDateInput = document.querySelector(".staffPortalDateInput");
const staffPortalDoctorInput = document.querySelector(
  ".staffPortalDoctorInput"
);
const staffPortalRecoveryRateInput = document.querySelector(
  ".staffPortalRecoveryRateInput"
);

const doctorPortalNameInput = document.querySelector(".doctorPortalNameInput ");
const doctorPortalRecoveryInput = document.querySelector(
  ".doctorPortalRecoveryInput"
);
//variables
const admins = [
  { name: "Muskaan Singhal", password: 5555, id: "ms" },
  { name: "Sanjay Gupta", password: 2222, id: "sg" },
  { name: "Rekha Gupta", password: 1111, id: "rg" },
];

let eventName;
let table;

const staff = [
  {
    name: "Abhishek Bacchan",
    password: 8888,
    id: "ab",
  },
  {
    name: "Radhika Nautiyal",
    password: 6666,
    id: "rn",
  },
];
const doctors = [
  { name: "sethi", id: "0", password: 1234 },
  { name: "kohli", id: "1", password: 2589 },
  { name: "bakaya", id: "2", password: 1478 },
  { name: "dhablaniya", id: "3", password: 7852 },
];
const patients = [
  {
    name: "tom",
    doctor: "kohli",
    date: "02/02/2021",
    age: 45,
    recoveryRate: 50,
    id: 0,
  },
  {
    name: "sawyer",
    doctor: "sethi",
    date: "05/05/2021",
    age: 50,
    recoveryRate: 60,
    id: 1,
  },
  {
    name: "finn",
    doctor: "bakaya",
    date: "07/07/2021",
    age: 12,
    recoveryRate: 80,
    id: 2,
  },
  {
    name: "finnsawyer",
    doctor: "sethi",
    date: "07/07/2021",
    age: 12,
    recoveryRate: 20,
    id: 3,
  },
  {
    name: "newpatient",
    doctor: "bakaya",
    date: "07/07/2021",
    age: 12,
    recoveryRate: 10,
    id: 4,
  },
  {
    name: "finn",
    doctor: "dhablaniya",
    date: "07/07/2021",
    age: 12,
    recoveryRate: 45,
    id: 5,
  },
  {
    name: "bobby",
    doctor: "bakaya",
    date: "07/07/2021",
    age: 12,
    recoveryRate: 30,
    id: 6,
  },
];
///////////////////////////////////////////////////////////

//initial function
const init = function () {
  $(".fourthPage").hide();
  $(".secondPage").hide();
  $(".thirdPage").hide();
  $(".fifthPage").hide();
  $(".viewPatient").hide();
};
init();

//establishing id
const idGenerator = function (name) {
  const result = name
    .split(" ")
    .map((word) => word[0])
    .map((word) => word.toLowerCase())
    .join("");
  return result;
};

//row adder for displaying patient list
const rowAdder = function (objArray) {
  viewPatient.innerHTML = "";
  objArray.forEach((obj) => {
    const html = `
    
    <tr class = 'patient'>
      <td>${obj.name}</td>
      <td>${obj.age}</td>
      <td>${obj.date}</td>
      <td>${obj.doctor}</td>
      <td>${obj.recoveryRate}%</td>
    </tr>    `;

    table.insertAdjacentHTML("beforeend", html);
  });
};

//click to login btn

logInBtn.addEventListener("click", function () {
  $(".firstPage").hide(1000);
  $(".secondPage").show(1000);
  $(".tabsContainer").show(2000);
});

//second page return btn
returnBtn.addEventListener("click", () => {
  $(".tabsContainer").hide(1000);
  $(".firstPage").show(2000);
});

//second page tabs
tabsContainer.addEventListener("click", (e) => {
  if (!e.target.closest(".tabContainer").classList.contains("tabContainer"))
    return;

  const parent = e.target.closest(".tabContainer");
  tabContainerArray.forEach((tab) => {
    if (tab.dataset.tab === parent.dataset.tab) {
      tab.classList.add("animate");
      tab.classList.add("active");
    } else {
      tab.classList.remove("animate");
      tab.classList.remove("active");
    }
  });
});

//chart ...........................................................
//admin  page chart adding function
const chartAdder = function (staffNum = 10, doctorsNum = 10, patientNum = 10) {
  chartContainer.innerHTML = "";
  const data = [
    { x: "Staff", value: `${staffNum}` },
    { x: "doctor", value: `${doctorsNum}` },
    { x: "patients", value: `${patientNum}` },
    { x: "Admins", value: `${admins.length}` },
  ];
  const chart = anychart.column();
  // chart.column(data);
  const series = chart.column(data);

  chart.title("Hospital statistics");

  chart.container("container");
  chart.draw();
};

//staff page chart adding function

const lineChartAdder = function (array) {
  lineChartContainer.innerHTML = "";
  const data = [];
  const dataValue = doctors.map((doctor) => {
    const repeat = array.reduce((acc, e) => {
      if (e.doctor === doctor.name) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    return { doctor: doctor.name, repeat: repeat };
  });

  dataValue.map((o) => {
    const obj = { x: `${o.doctor}`, value: `${o.repeat}` };
    data.push(obj);
  });

  const lineChart = anychart.line();
  const series = lineChart.line(data);
  lineChart.title("doctors X no. of patients");
  series.stroke("red");
  lineChart.container("container1");
  lineChart.draw();
};

//doctor portal chart adder function
const doctorLineChartAdder = function (array) {
  doctorLineChartContainer.innerHTML = "";

  const data = array.map((obj) => {
    return {
      x: `${obj.name}`,
      value: `${obj.recoveryRate}`,
    };
  });

  const doctorLineChart = anychart.line();
  const series = doctorLineChart.line(data);
  doctorLineChart.title("patient X recovery rate");
  series.stroke("blue");
  doctorLineChart.container("container2");
  doctorLineChart.draw();
};
/////////////////////////////////////////////////////////////////////////////////////////////////
//tab submissions
//admin tab submission
adminSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //validation
  if (
    !(adminNameInput.value.trim().length > 0 && adminPassInput.value.trim() > 0)
  )
    return;

  currentAccount = admins.find((account) => {
    if (
      account.id === adminNameInput.value &&
      account.password === +adminPassInput.value
    ) {
      return account;
    }
  });

  if (currentAccount) {
    $(".secondPage").hide(1000);
    $(".thirdPage").show(2000);
    $(".adderForm").hide();
    adminWelcomeNote.textContent = `Welcome ${currentAccount.name}`;
    chartAdder(staff.length, doctors.length, patients.length);
  } else {
    alert("cannot login!");
  }
});

portalsContainer.addEventListener("click", function (e) {
  //managing the clicks
  if (!e.target.classList.contains("portalBtn")) return;
  eventName = e.target.id;
  $("#container").hide();
  $(".form").fadeIn(2000);
});

addUserBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //validation
  let obj;
  if (ageValue.value?.trim().length > 0 && nameValue.value?.trim().length > 0) {
    obj = {
      name: nameValue.value,
      age: ageValue.value,
      gender: genderValue.value,
      password: +passwordValue.value,
    };
    // console.log(obj);
    if (eventName === "staff") {
      obj.id = idGenerator(obj.name);
      staff.push(obj);
    }

    if (eventName === "doctors") {
      obj.id = idGenerator(obj.name);
      doctors.push(obj);
    }

    if (eventName === admin) {
      obj.id = idGenerator(obj.name);
      admins.push(obj);
    }

    $(".form").hide();

    chartAdder(staff.length, doctors.length, patients.length);
    $("#container").show(500);
  } else {
    alert("Invalid feild inputs");
  }

  ageValue.value = "";
  genderValue.value = "";
  nameValue.value = "";
  passwordValue.value = "";
});

adminReturnBtn.addEventListener("click", function () {
  $(".thirdPage").hide(2000);
  $(".firstPage").show(2000);
  welcomeContainer.classList.remove("hidden");
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//admin section over /////////////////////////////////////////////////////

//staff section ///////////////////////////////////////////////////////////////////////

staffSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //validation
  if (
    staffNameInput.value?.trim().length > 0 &&
    staffPassInput.value.trim()?.length > 0
  ) {
    currentAccount = staff.find((obj) => {
      if (
        obj.id === staffNameInput.value &&
        obj.password === +staffPassInput.value
      )
        return obj;
    });

    if (currentAccount) {
      $(".secondPage").hide(2000);
      $(".fourthPage").show(2000);
      $(".staffFormContainer").hide();
      lineChartAdder(patients);
    } else {
      alert("invalid id or password!");
    }
  } else {
    alert("invalid input feilds !");
  }
});

staffRegisterBtn.addEventListener("click", function () {
  $("#container1").hide();
  $(".staffFormContainer").fadeIn(2000);
});

staffAddPatientBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    staffPortalAgeInput.value?.trim().length > 0 &&
    staffPortalNameInput.value?.trim().length > 0 &&
    staffPortalDoctorInput.value?.trim().length > 0 &&
    staffPortalDateInput.value?.trim().length > 0 &&
    staffPortalRecoveryRateInput.value?.trim().length > 0
  ) {
    const patient = {
      name: staffPortalNameInput.value,
      age: staffPortalAgeInput.value,
      doctor: staffPortalDoctorInput.value,
      date: staffPortalDateInput.value,
      recoveryRate: staffPortalRecoveryRateInput.value,
    };

    patients.push(patient);
    $(".staffFormContainer").hide();
    lineChartAdder(patients);
    $("#container1").fadeIn(2000);
  } else {
    alert("Invalid input feilds!");
  }
});

staffReturnBtn.addEventListener("click", function () {
  $(".fourthPage").hide(2000);

  $(".firstPage").show(2000);
});
const viewPatientFunction = function () {
  table = document.createElement("table");
  table.classList.add("patientList");

  table.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Date of Registration</th>
    <th>Consulting Doctor</th>
    <th>Recovery Rate</th>
  </tr>
`;

  rowAdder(patients);
  viewPatient.prepend(table);
};
staffViewPatientBtn.addEventListener("click", function () {
  viewPatientFunction();
  const html = `
  <button class="viewPatientReturnBtn btn card">Return</button>`;

  viewPatient.insertAdjacentHTML("beforeend", html);
  $(".fourthPage").hide();
  $(".viewPatient").show(2000);
  $(".viewPatientReturnBtn").click(() => {
    $(".viewPatient").hide(2000);
    $(".fourthPage").show(2000);
  });

  const res = viewPatient.querySelectorAll(".check");
  const result = [...res];

  console.log(result);
});

//staff section ends/////////////////////////////////////////////////////////////////
$(".viewPatientReturnBtn").click(() => {
  $(".viewPatient").hide(2000);
  $(".firstPage").show(2000);
});
//doctors section starts............................................
doctorSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    !(
      doctorNameInput.value.trim().length > 0 &&
      doctorPassInput.value.trim() > 0
    )
  ) {
    alert("invalid input feild");
    return;
  }

  const currentAccount = doctors.find((doc) => {
    if (
      doc.id === doctorNameInput.value &&
      doc.password === +doctorPassInput.value
    )
      return doc;
  });

  if (currentAccount) {
    $(".secondPage").hide(2000);
    $(".fifthPage").show(2000, () => {
      doctorLineChartAdder(patients);
      $("#container2").show(2000);
    });
    $(".doctorFormContainer").hide();
    return doc;
  } else {
    alert("wrong id or password!");
  }
});

editRecoveryRateBtn.addEventListener("click", function () {
  $("#container2").hide();
  $(".doctorFormContainer").fadeIn(1000);
});

formEditRecoveryBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    doctorPortalNameInput.value.trim().length > 0 &&
    doctorPortalRecoveryInput.value?.trim().length > 0
  ) {
    const currentPatient = patients.find((obj) => {
      console.log(obj.id);
      if (obj.id === +doctorPortalNameInput.value) {
        return obj;
      }
    });
    if (currentPatient) {
      currentPatient.recoveryRate = +doctorPortalRecoveryInput.value;
      $(".doctorFormContainer").hide();
      doctorLineChartAdder(patients);
      $("#container2").show(2000);
    } else {
      alert("Not a valid patient id or password");
    }
  }
});

doctorViewPatientBtn.addEventListener("click", function () {
  viewPatientFunction();
  const html = `
  <button class="viewPatientReturnBtn btn card">Return</button>`;
  viewPatient.insertAdjacentHTML("beforeend", html);
  $(".fifthPage").hide(2000);
  $(".viewPatient").show(2000);
  $(".viewPatientReturnBtn").click(() => {
    $(".viewPatient").hide(2000);
    $(".fifthPage").show(2000);
  });
});

doctorReturnBtn.addEventListener("click", function () {
  $(".fifthPage").hide(2000);
  $(".firstPage").show(2000);
});
//doctor section ends...............................................
