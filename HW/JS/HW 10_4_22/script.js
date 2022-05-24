let student = {
  sName: null,
  average: null,
  greenPass: null,
};
let allTestsAbove50 = false;
let resultDiv = document.querySelector("#result");

// ממוצע המבחנים שלו גדול או שווה ל-60
// בכל המבחנים קיבל ציון גבוה מ-50
// יש לו תו ירוק

function sendForm(event) {
  event.preventDefault();
  let sName = document.querySelector("#sname").value;
  let grade = document.querySelector("#grades").value;
  let gPass = document.querySelector("#gpass").checked;
  grade = grade.replaceAll("\n", " ");
  grade = grade.replaceAll(",", " ");
  let gradesTmp = grade.split(" ");
  let grades = [];
 for (const grade of gradesTmp) {
     if (grade.trim() !="") {
         grades.push(grade)
     }
 }
  let avg = 0;
  let above50 = true;
  let resultHTML = "";

  for (const grade of grades) {
    avg += Number(grade);
    if (grade < 50) {
      above50 = false;
    }
  }
  avg /= grades.length;

  student.sName = sName;
  student.average = avg;
  student.greenPass = gPass;
  document.body.classList.remove("success");
  document.body.classList.remove("failed");

  if (above50 == true && student.greenPass == true && student.average >= 60) {
    resultHTML += `<h1>${student.sName} is allowed to graduate</h1>`;
    resultHTML += `<table>
          <tr><th>Test Number</th>
          <th>Grades</th>
          </tr>`;
    for (let index = 0; index < grades.length; index++) {
      const grade = grades[index];
      resultHTML += `
      <tr>
      <td>test #${index + 1}</td>
      <td>${grade}</td>
      </tr>`;
    }
    resultHTML += `<tr class="avgRow">
    <td >Average</td>
    <td>${student.average}</td>
    </tr>`;
    resultHTML += `</table>`;
    document.body.classList.add("success");
  } else {
    resultHTML += `<h1>${student.sName} isnt allowed to graduate</h1>`;
    resultHTML += `<ul>`;
    if (student.greenPass == false) {
      resultHTML += `<li>${student.sName} doesnt have green pass</li>`;
    }
    if (student.average < 60) {
      resultHTML += `<li>${student.sName} grades average is too low</li>`;
    }
    for (let index = 0; index < grades.length; index++) {
      const grade = grades[index];
      if (grade < 50) {
        resultHTML += `<li>${student.sName} got ${grade} in test #${
          index + 1
        } (under 50)</li>`;
      }
    }
    resultHTML += `</ul>`;
    resultHTML += `<table>
          <tr><th>Test Number</th>
          <th>Grades</th>
          </tr>`;
    for (let index = 0; index < grades.length; index++) {
      const grade = grades[index];
      resultHTML += `
      <tr class="grade ${grade > 50 ? "" : "failedGrade"}">
      <td>test #${index + 1}</td>
      <td>${grade}</td>
      </tr>`;
    }
    resultHTML += `<tr class="avgRow">
    <td>Average</td>
    <td>${student.average}</td>
    </tr>`;
    resultHTML += `</table>`;
    document.body.classList.add("failed");
  }
  resultDiv.innerHTML = resultHTML;

}
