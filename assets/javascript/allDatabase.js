
// users Database 




let newdb = new Dexie('usersDatabase');
newdb.version(1).stores({
    users: '++id, fullname, email,password'
});

newdb.open();



//Course Database 




let courseDatabase = new Dexie('allCourseDatabase');
courseDatabase.version(1).stores({

    courses: '++id , courseName ,courseTitle, courseDetail , courseImage'

})
courseDatabase.open()


// student's course




let studentCourse = new Dexie('studentCourseDatabase');
studentCourse.version(1).stores({

    courses: '++id , enrolledcourseName ,enrolledcourseTitle, enrolledcourseDetail , enrolledcourseImage'


})

studentCourse.open();


// staff  Database 



let yondahStaff = new Dexie('staffDatabase');
yondahStaff.version(1).stores({
    staffs : '++id , lecturerFullname , lecturerCountry , lecturerAddress , courseName, courseTitle , courseDiscription, courseImage, proposal'
})


yondahStaff.open();

