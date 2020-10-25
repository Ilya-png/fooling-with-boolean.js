function moreThan5(val1) {
  return val1 > 5;
}

function isNewTopScore(val1, val2) {
  return val1 > val2;
}

function isInDanger(val1) {
  return 71 >= val1 && val1 >= 60;
}

function isCoasting(val1) {
  return 83 >= val1 && val1 >= 72;
}

function isSucceeding(val1) {
  return 92 >= val1 && val1 >= 84;
}

function isFailing(val1) {
  return val1 < 60;
}

function isAcing(val1) {
  return val1 > 92;
}

function isStudent(val1) {
  return val1 === "student";
}

function isTeacher(val1) {
  return val1 === "teacher";
}

function isAdmin(val1) {
  return val1 === "admin";
}

function isElementary(val1) {
  return val1 === "elementary";
}

function areDifferentPeople(val1, val2) {
  return val1 !== val2;
}

function isMiddleSchoolTeacher(val1, val2) {
  return val1 === "teacher" && val2 <= 8 && val2 >= 6;
}

function notAnElementarySchoolAdministrator(val1, val2) {
  return val1 !== "elementary" || val2 !== "admin";
}
