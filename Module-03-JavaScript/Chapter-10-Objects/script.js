let students = [
    {
        name: "Anshu",
        marks: 90
    },
    {
        name: "Akash",
        marks: 85
    }
];

console.log(students[0].name);
console.log(students[1].marks);

let student = {
    name: "Anshu",

    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

student.greet();