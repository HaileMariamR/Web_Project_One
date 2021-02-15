M.AutoInit();

const logintempo = document.querySelector('#Login');
const signup = document.querySelector('#Signup')





// signup.addEventListener('click' ,()=>{
//     location = './signUpPage.html'
// })
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems, options);
//   });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const enrollbtn = document.querySelector('.enroll');
// enrollbtn.addEventListener('click' ,()=>{

//         location = './takingCourse.html'

// });





const sliderItem = document.querySelector('.mainSlider')



document.addEventListener('DOMContentLoaded' , async ()=>{


    logintempo.addEventListener('click' ,()=>{
        location  = './loginPage.html'
    })



    let allCourseforIndexPage = await courseDatabase.courses.toArray();
    let output = ''
    
    // for (let index = 0; index < allCourseforIndexPage.length; index++) {
        
    // //     output +=`
    // //     <div class="card" style="width: 25rem">
    // //      <img src="${allCourseforIndexPage[index].courseImage}" class="card-img-top" alt="..." />
    // //     <div class="card-body">
    // //         <h5 class="card-title">${allCourseforIndexPage[index].courseTitle}</h5>
    // //         <p class="card-text">
    // //             ${allCourseforIndexPage[index].courseDetail}
    // //         </p>
    // //         <p>5⭐⭐⭐⭐⭐</p>
    // //         <p style="color: brown">23423 Students Enrolled</p>
    // //         <a href="./signupandlogin.html" class="btn btn-danger">Enroll</a>
    // //     </div>
    // //     </div>
    
    // //     `
    // // }

    // // sliderItem.innerHTML = output ;
    // }



});