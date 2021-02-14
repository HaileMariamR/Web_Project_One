
// const clcikme = document.querySelector('.clickme');
// clcikme.addEventListener('click' ,()=>{
//     alert("Fresh start")

// });

const coursename = document.querySelector('#courseName');
const coursetitle = document.querySelector('#coursetitle');
const coursedetail = document.querySelector('#coursedetail');
const courseimage = document.querySelector('#courseimage');
const addcorusebtn = document.querySelector('#adminaddcourse');





document.addEventListener('DOMContentLoaded' , ()=>{

    addcorusebtn.addEventListener('click' , adminAddCourse)

    function adminAddCourse(){
        let cName = coursename.value ;
        let cTitle = coursetitle.value;
        let cDetail = coursedetail.value;
        let cImage = courseimage.value;
    

        courseDatabase.courses.put({
            courseName : cName,
            courseTitle:cTitle,
            courseDetail : cDetail,
            courseImage : cImage

        })

        coursename.value = '';
        coursetitle.value = '';
        coursedetail.value = '';
        courseimage.value  = '';

        alert('u added sucessfully!');
        location = './admin.html'

    }





})





// main Admin Activity 
const ManageCourses = document.querySelector('.manageCoursebtn')
const approveCoursebtn = document.querySelector('.approveCoursebtn')
const manageUserbtn = document.querySelector('.manageUserbtn')

const manageCourse = document.querySelector('.manageCourse')
const approvecourse = document.querySelector('.approvecourse');
const manageUsers  = document.querySelector('.manageUsers');



document.addEventListener('DOMContentLoaded' , async ()=>{


    ///////////////////////////////  About Displaying
    approvecourse.style.display = 'none'
    manageUsers.style.display = 'none'

    ManageCourses.addEventListener('click' , displayfirst)
    approveCoursebtn.addEventListener('click' , displaysecond)
    manageUserbtn.addEventListener('click' , displaythird)


    function displayfirst(){
        manageCourse.style.display = 'block'
        approvecourse.style.display = 'none'
        manageUsers.style.display = 'none'

    }
    function displaysecond(){
        manageCourse.style.display = 'none'
        approvecourse.style.display = 'block'
        manageUsers.style.display = 'none'

    }

    let allusers = await newdb.users.toArray();

    function displaythird(){
        manageCourse.style.display = 'none'
        approvecourse.style.display = 'none'
        manageUsers.style.display = 'block';
        manageUsers.innerHTML = '';
        
        // <table style="width:100%">
        //     <tr>
        //         <th>Firstname</th>
        //         <th>Lastname</th>
        //         <th>Age</th>
        //     </tr>
        //     <tr>
        //         <td>Jill</td>
        //         <td>Smith</td>
        //         <td>50</td>
        //     </tr>
        //     <tr>
        //         <td>Eve</td>
        //         <td>Jackson</td>
        //         <td>94</td>
        //     </tr>
        //  </table>
        let userinfotitle = document.createElement('h3');
        userinfotitle.textContent = 'all Users'
        let userTable = document.createElement('table');
        userTable.style.width = '100%';
        for (let index = 0; index < allusers.length; index++) {

            let row = document.createElement('tr');
            row.innerHTML = `
                <th>${allusers[index].fulname}</th>
                <th>${allusers[index].email}</th>
                <th>${allusers[index].password}</th>
    
            `
            userTable.appendChild(row)

            
        }
        manageUsers.appendChild(userinfotitle)
        manageUsers.appendChild(userTable)


        // console.log(allusers);


    }

    ///////////////////////////////////////////////////////////////

    // let allusers = await newdb.users.toArray();


    

    // console.log(allusers);




})






