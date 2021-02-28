// const logintempo = document.querySelector('#Login');
// const signup = document.querySelector('#Signup');

// signup.addEventListener('click' ,()=>{
//     location = './signUpPage.html'
// })

// $('.owl-carousel').owlCarousel({
// 	loop: true,
// 	margin: 10,
// 	nav: false,
// 	autoplay: true,
// 	autoplayTimeout: 2000,
// 	dots: false,
// 	responsive: {
// 		0: {
// 			items: 1,
// 		},
// 		600: {
// 			items: 3,
// 		},
// 		1000: {
// 			items: 5,
// 		},
// 	},
// });

// const enrollbtn = document.querySelector('.enroll');
// enrollbtn.addEventListener('click' ,()=>{

//         location = './takingCourse.html'

// });

// document.addEventListener('DOMContentLoaded', () => {
// 	logintempo.addEventListener('click', () => {
// 		location = './signupandlogin.html';
// 	});
// });
const teach = document.querySelector('#teach');

const courses = document.querySelector('#courses');

document.addEventListener('DOMContentLoaded', () => {
	buildCourse();
});

function checkAuth() {
	let sess = Cookies.get('user');
	if (sess) {
		var z = [];
		var res = sess.split('&');
		for (let i of res) {
			var arg = i.split('=');
			z.push(arg);
		}
		// let email = z[0][1];
		let role = z[1][1];

		if (role == 'student') {
			location = './student.html';
		} else if (role == 'instructor') {
			location = './staff.html';
		} else if (role == 'admin') {
			location = './admin.html';
		}
	} else {
		location = './login.html?login=0';
	}
}

async function getCourses() {
	let courses = await newCourse.course.toArray();
	return courses;
}

function buildCourse() {
	courses.innerHTML = '';
	getCourses().then((data) => {
		for (let index = 0; index < data.length; index++) {
			// let coursename = data[index].courseName;
			let coursetitle = data[index].courseTitle;
			// let coursedetail = data[index].courseDetail;
			// let courseimage = data[index].courseImage;

			let oneCourse = document.createElement('div');
			oneCourse.classList.add('card');
			oneCourse.style.width = '18rem';
			oneCourse.style.margin = '1%';
			oneCourse.innerHTML = `
  				<img src="" alt="courseImg">
  				<div class="card-body">
    				<h5 class="card-title">${coursetitle}</h5>
    				<p class="card-text">${coursetitle}</p>
    				<a href="#" class="btn btn-primary">Go somewhere</a>
  				
			</div>`;

			courses.appendChild(oneCourse);
		}
	});
}
