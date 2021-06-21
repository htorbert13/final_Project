var lg = document.getElementById("lg");
var gd = document.getElementById("gd");
var p = document.getElementById("p");
var data = [];


function grade() {
  let uid = document.getElementById("uid").value;
  let upass = document.getElementById("upass").value;

  if (uid == "") {
    p.innerText = "Enter username";
  } else if (upass == "") {
    p.innerText = "Enter password";
  } else if (uid != "cool") {
    p.innerText = "Invalid username";
  } else if (upass != "password") {
    p.innerText = "Invalid password ";
  } else {
    lg.style.display = "none";

    gd.style.display = "block";

    p.innerText = "";
  }
}

function grade_view() {
  let dstr = "<h1><center><b><u>";

  for (i = 0; i < data.length; i++) {
    dstr =
      dstr +
      "Student name: " +
      data[i].name +
      "; Grade: " +
      data[i].grade +
      "<br><br>";
  }

  document.write(dstr);
}

function add_grade() {
  let name = document.getElementById("name");
  let grade = document.getElementById("grade");
  let sub = document.getElementById("sub");
  name.style.display = "block";
  grade.style.display = "block";
  sub.style.display = "block";
}

function add_data() {
  let name = document.getElementById("name");
  let grade = document.getElementById("grade");
  let sub = document.getElementById("sub");

  if (name.value == "") {
    p.innerText = "Please enter name";
  } else if (grade.value == "") {
    p.innerText = "Please enter grade";
  } else if (parseInt(grade.value) < 0 || parseInt(grade.value) > 100) {
    p.innerText = "Grade must be in 0 to 100 range";
  } else {
    data.push({
      name: name.value,
      grade: grade.value
    });

    name.value = "";
    grade.value = "";
    name.style.display = "none";
    grade.style.display = "none";
    sub.style.display = "none";
  }
}