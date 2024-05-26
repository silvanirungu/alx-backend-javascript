interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// This class represents a Teacher who cannot work from home and cannot have a break.
export class Teacher implements TeacherInterface {
export class Director implements DirectorInterface {
    workFromHome = () => 'working from home';
    getCoffeeBreak = () => 'Cannot have a coffee break';
    workTeacherTasks = () => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot work from home';
    getCoffeeBreak = () => 'Cannot have a break';
    workTeacherTasks = () => 'Getting to work';
}

// If the salary is a number less than 500, it returns a new instance of Teacher.
// Otherwise, it returns a new instance of Director.
export const createEmployee = (salary: number | string): Teacher | Director => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;

    } else {
        return new Director;
    }
}

interface IsDirector {
	(employee: Director | Teacher): employee is Director;
}

interface ExecuteWork {
	(employee: Director | Teacher): string;
}

const isDirector: IsDirector = (employee: Director | Teacher): employee is Director => {
	return employee instanceof Director;
}

const executeWork: ExecuteWork = (employee: Director | Teacher): string => {
	if (employee instanceof Director) {

		return employee.workDirectorTasks();
	} else {

		return employee.workTeacherTasks();
	}
}