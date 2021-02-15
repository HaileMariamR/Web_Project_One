
// const clcikme = document.querySelector('.clickme');
// clcikme.addEventListener('click' ,()=>{
//     alert("Fresh start")

// });

const coursename = document.querySelector('#courseName');
const coursetitle = document.querySelector('#coursetitle');
const coursedetail = document.querySelector('#coursedetail');
const courseimage = document.querySelector('#courseimage');
const addcorusebtn = document.querySelector('#adminaddcourse');
const coursePlaceholder = document.querySelector('.coursePlaceholder')

const ManageCourses = document.querySelector('.manageCoursebtn')
const approveCoursebtn = document.querySelector('.approveCoursebtn')
const manageUserbtn = document.querySelector('.manageUserbtn')

const manageCourse = document.querySelector('.manageCourse')
const approvecourse = document.querySelector('.approvecourse');
const manageUsers  = document.querySelector('.manageUsers');


document.addEventListener('DOMContentLoaded' , async()=>{

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




    // Main admin activity

    ///////////////////////////////  About Displaying
    approvecourse.style.display = 'none'
    manageUsers.style.display = 'none'
// main Admin Activity 

    ManageCourses.addEventListener('click' , displayfirst)
    approveCoursebtn.addEventListener('click' , displaysecond)
    manageUserbtn.addEventListener('click' , displaythird)



    let allCourses = await courseDatabase.courses.toArray();
    function displayfirst(){
        manageCourse.style.display = 'block'
        approvecourse.style.display = 'none'
        manageUsers.style.display = 'none'
        let title = document.createElement('h3');
        title.className  = 'admin_title';
        title.textContent = 'All Courses'

        coursePlaceholder.innerHTML ='';
        coursePlaceholder.appendChild(title)

        for (let index = 0; index < allCourses.length; index++) {
            let     coursename = allCourses[index].courseName;
            let      coursetitle = allCourses[index].courseTitle;
            let      coursedetail = allCourses[index].courseDetail;
            let       courseimage = allCourses[index].courseImage;


            let oneCourse = document.createElement('div');
            oneCourse.className = 'card coursediv col-md-4' ;
            oneCourse.style.width = '25rem';
            oneCourse.style.height = '24rem';
            oneCourse.style.marginLeft = '2rem'
            oneCourse.style.marginTop = '4rem'

            oneCourse.innerHTML = `
                    <img src="${courseimage}" class="courseimage card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 style="font-size:15px;color:cyan" class="card-title coursename">${coursename}</h5>
                    
                    <h2 coursetitle style="font-size:15px;color:black">${coursetitle}</h2> 
                    
                    <p coursedetail style="" class="card-text">
                        ${coursedetail}
                    </p>
                    <a href="#" id='r' class="btn remove btn-outline-danger">Remove</a>
                    </div>
            `
            coursePlaceholder.appendChild(oneCourse)

        }
        // console.log(allCourses);



        let removecoursebtn = document.querySelectorAll('#r');
        for (let index = 0; index < removecoursebtn.length; index++) {
            removecoursebtn[index].addEventListener('click' , courseRemove)        
        }
   
      
         function courseRemove(e){
             console.log('frseh start');
            e.target.parentElement.parentElement.style.display = 'none';
            let removedCourseName = e.target.parentElement.children[0].textContent;
            // console.log(removedCourseName );
            courseDatabase.courses.where('courseName').equals(removedCourseName).delete();
            studentCourse.courses.where('enrolledcourseName').equals('').delete();
            // studentCourse.courses.delete(1);
   
   
        }
   
   
   
     }
    






    //// Approve 



    let allStaffs = await yondahStaff.staffs.toArray();
    function displaysecond(){
        manageCourse.style.display = 'none'
        approvecourse.style.display = 'block'
        
        manageUsers.style.display = 'none'

         
        let lecturerFullnamevalue = '';
        let lecturerCountryvalue  = ' ' ;
        let lecturerAddressvalue = '' ;
        let courseNamevalue = '' ;
        let courseTitlevalue = '' ;
        let courseDiscriptionvalue = '';
        let courseImagevalue = '';
        let proposal = '';
        approvecourse.innerHTML = ''

        // console.log(allStaffs);
        for (let i = 0; i < allStaffs.length; i++) {
            let outputValue = '';
            let instructorinfodiv = document.createElement('div');

           


                lecturerFullnamevalue = allStaffs[i].lecturerFullname;
                lecturerCountryvalue = allStaffs[i].lecturerCountry;
                lecturerAddressvalue = allStaffs[i].lecturerAddress;
                courseNamevalue = allStaffs[i].courseName;
                courseTitlevalue = allStaffs[i].courseTitle;
                courseDiscriptionvalue = allStaffs[i].courseDiscription;
                courseImagevalue =allStaffs[i].courseImage;
                proposal = allStaffs[i].proposal;

               
                     outputValue += `
                                
                            <div style="background-color: ;margin-top: 4rem;width:50rem" >
                                <h5>instructor Name     : ${lecturerCountryvalue} </h5>
                                <h5>instructor country  :  ${lecturerCountryvalue}</h5>
                                <h5>instructor eamil    :  ${lecturerAddressvalue} </h5>
                                <h5>instructor coursename : ${courseNamevalue} </h5>
                                <h5>instructor coursetitle : ${courseTitlevalue}</h5>
                                <h5>instructor coursedetail : ${courseDiscriptionvalue}</h5>
                                <h5>instructor courseimage : ${courseImagevalue}</h5>
                                <h5>instructor proposal : ${proposal}</h5>
                                 <a class="btn approve btn-outline-success  "  href="">Approve</a>
                                
                            </div>

                    `


            

                
     
            instructorinfodiv.innerHTML = outputValue;
            approvecourse.appendChild(instructorinfodiv)





            
        }



        

        let approvebtn = document.querySelectorAll('.approve');
        for (let index = 0; index < approvebtn.length; index++) {
                    
            approvebtn[index].addEventListener('click' , approveCourse);
        }
        function approveCourse(e){
            e.target.parentElement.parentElement.style.display = 'none';
            let approvedCourse = e.target.parentElement.children[3].textContent;
            yondahStaff.staffs.where('courseName').equals(approvedCourse).delete();

            // alert('f')

            courseDatabase.courses.put({

                courseName:courseNamevalue,
                courseTitle:courseTitlevalue,
                courseDetail: courseDiscriptionvalue,
                courseImage:courseImagevalue

            })

           


        }


    }






    //// Manage users


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


        // console.log(allusers)

    }




})














