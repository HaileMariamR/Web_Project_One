// users Database
let newdb = new Dexie('usersDatabase');
newdb.version(1).stores({
	users: '++id, fullname, email,role,password',
});
newdb.open();

// student's course
let studentCourse = new Dexie('studentCourseDatabase');
studentCourse.version(1).stores({
	courses: 'name , courseId',
});
studentCourse.open();

//new coursedb
let newCourse = new Dexie('newCourse');
newCourse.version(1).stores({
	course:
		'++id, courseTitle, courseDescription, courseImage, courseDuration, courseStream, coursePrice, courseRating, enrolled, instructorName',
});
newCourse.open();
