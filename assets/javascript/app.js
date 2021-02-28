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
const info = document.querySelector('#stud');

const courses = document.querySelector('#courses');

document.addEventListener('DOMContentLoaded', () => {
	buildCourse();
});

async function getCourses() {
	let courses = await newCourse.course.toArray();
	return courses;
}

function buildCourse() {
	courses.innerHTML = '';
	getCourses().then((data) => {
		for (let index = 0; index < data.length; index++) {
			const {
				id,
				courseTitle,
				courseImage,
				courseDescription,
				courseDuration,
				courseStream,
				coursePrice,
				courseRating,
			} = data[index];

			let oneCourse = document.createElement('div');
			oneCourse.innerHTML = `

			<div class="card" style="width: 25rem">
				<img src="${courseImage}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${courseTitle}</h5>
					<p class="card-text">
					${courseDescription}
					</p>
					<p>${courseRating}</p>
					<p style="color: brown">${courseDuration} Students Enrolled</p>
					<a id="enroll" class="${id} btn btn-danger">Enroll</a>
				</div>
			</div>`;

			courses.appendChild(oneCourse);
		}
	});
}
function checkIfEnrolled() {}
