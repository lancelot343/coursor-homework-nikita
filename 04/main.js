const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

function couple(students)
{
	return [[students[0],students[2]],[students[1],students[3]],[students[4],students[5]]];
}
const couples = couple(students);
console.log(couples);

function nestArray(students, themes)
{
	let pair_project = [];
	for (let i=0;i<students.length;i++)
	{
		pair_project.push([couples[i].join(' и '), themes[i]]);
	}
	return pair_project;
}
const pair_project = nestArray(couples, themes);
console.log(pair_project);

function mark(students, marks)
{
	let mark_student = [];
	for (let i=0;i<students.length;i++)
	{
		mark_student.push([students[i], marks[i]]);
	}
	return mark_student;
}
const student_marks = mark(students, marks);
console.log(student_marks);

function random_mark(pairProjects)
{
	let random_marks = [];
	for (let i=0;i<pairProjects.length;i++)
	{
		let randomMark = Math.round(Math.random()*5);
		random_marks[i] = ([...pairProjects[i], randomMark]);
	}
	return random_marks;
}
const random_marks = random_mark(pair_project);
console.log(random_marks);
