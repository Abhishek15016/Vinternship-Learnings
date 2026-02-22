// ===============================
// 📚 CONSTANTS
// ===============================

const subjects = ["Math", "Science", "English", "History", "Programming"];
const HONOR_ROLL_THRESHOLD = 90;
const PASSING_GRADE = 60;


// ===============================
// 🧮 FUNCTION: Calculate Average
// ===============================

function calculateAverage(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    return total / grades.length;
}


// ===============================
// 🎯 FUNCTION: Determine Letter Grade
// ===============================

function determineLetterGrade(average) {
    if (average >= 90) return "A";
    else if (average >= 80) return "B";
    else if (average >= 70) return "C";
    else if (average >= 60) return "D";
    else return "F";
}


// ===============================
// 🏅 FUNCTION: Check Honor Roll
// ===============================

function isHonorRoll(average) {
    return average >= HONOR_ROLL_THRESHOLD;
}


// ===============================
// ✅ FUNCTION: Check Passing
// ===============================

function isPassing(average) {
    return average >= PASSING_GRADE;
}


// ===============================
// 🖨 FUNCTION: Generate Report Card
// ===============================

function generateReportCard(student) {

    console.log("=================================");
    console.log("       📘 Coding Academy");
    console.log("          Report Card");
    console.log("=================================");

    console.log(`Name       : ${student.name}`);
    console.log(`Student ID : ${student.id}`);
    console.log("---------------------------------");

    // Print subject-wise marks
    for (let i = 0; i < subjects.length; i++) {
        console.log(`${subjects[i]} : ${student.grades[i]}`);
    }

    console.log("---------------------------------");

    const average = calculateAverage(student.grades);
    const letterGrade = determineLetterGrade(average);
    const honor = isHonorRoll(average);
    const passing = isPassing(average);

    console.log(`Average Grade : ${average.toFixed(2)}`);
    console.log(`Letter Grade  : ${letterGrade}`);
    console.log(`Honor Roll    : ${honor ? "Yes" : "No"}`);
    console.log(`Result        : ${passing ? "Pass" : "Fail"}`);

    if (honor) {
        console.log("🎉 Congratulations on making the Honor Roll!");
    }

    console.log("=================================\n");

    return {
        average,
        honor,
        passing
    };
}


// ===============================
// 👨‍🎓 STUDENT DATA
// ===============================

const students = [
    {
        name: "Johnson",
        id: "S101",
        grades: [95, 88, 92, 85, 90]
    },
    {
        name: "Alice",
        id: "S102",
        grades: [70, 75, 80, 78, 77]
    },
    {
        name: "Charlie",
        id: "S103",
        grades: [50, 60, 58, 65, 55]
    }
];


// ===============================
// 📊 CLASS STATISTICS
// ===============================

let totalClassAverage = 0;
let honorRollCount = 0;
let passingCount = 0;

for (let i = 0; i < students.length; i++) {

    const result = generateReportCard(students[i]);

    totalClassAverage += result.average;

    if (result.honor) honorRollCount++;
    if (result.passing) passingCount++;
}

const classAverage = totalClassAverage / students.length;


// ===============================
// 📈 FINAL CLASS REPORT
// ===============================

console.log("********* CLASS STATISTICS *********");
console.log(`Class Average        : ${classAverage.toFixed(2)}`);
console.log(`Honor Roll Students  : ${honorRollCount}`);
console.log(`Passing Students     : ${passingCount}`);
console.log(`Total Students       : ${students.length}`);
console.log("************************************");