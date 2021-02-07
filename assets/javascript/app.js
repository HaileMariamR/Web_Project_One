M.AutoInit();

const login = document.querySelector('#Login');
const signup = document.querySelector('#Signup')
login.addEventListener('click' ,()=>{
    location  = './loginPage.html'
})
signup.addEventListener('click' ,()=>{
    location = './signUpPage.html'
})
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
