
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


