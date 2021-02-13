
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