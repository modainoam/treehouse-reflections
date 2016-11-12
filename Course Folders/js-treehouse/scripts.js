students = [
	{name: "noam", skill: "ios", achievement: 45}
	,{name: "matan", skill: "android", achievement: 23}
	,{name: "tom", skill: "web", achievement: 22}
	,{name: "tamar", skill: "design", achievement: 12}
	,{name: "margalit", skill: "numerologie", achievement: 1}
];

var student_id;
var student;
var prop

var students_names = []


for (student_id in students) {
	student = students[student_id];	
	students_names.push(student.name);

}

function print(message) {
	outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}


function print_student(name) {

	var message = "";
	for (student_id in students) {
		student = students[student_id];	
		if (student.name == name) {
			message += ("<h2>Student - " + student.name + "</h2>");
			message += ("<p>Studies - " + student.skill + "</p>");
			message += ("<p>And has - " + student.achievement + "<points./p>");
			print(message);
		}
	}
}



var name = '';

while (name !== 'quit') {
	name = prompt("Please enter student name");

	if (students_names.indexOf(name) > -1 ) {
		print_student(name);
	} 
}


