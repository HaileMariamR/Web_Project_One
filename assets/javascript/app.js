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
var enrollBtn = '';

document.addEventListener('DOMContentLoaded', () => {
	buildCourse();
	enrollBtn = document.getElementsByClassName('enroll');
});

async function getCourses() {
	let courses = await newCourse.course.toArray();
	return courses;
}

function buildCourse() {
	courses.innerHTML = '';
	getCourses().then((data) => {
		// must be for enrolled courses
		// if (data.length == 0) {
		// 	info.innerHTML = 'Start lrarning today.';
		// } else {
		// 	info.innerHTML = 'Continue where you left off.';
		// }
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
				instructorName,
				enrolled,
			} = data[index];

			let oneCourse = document.createElement('div');
			oneCourse.classList.add('col-md-3');
			oneCourse.classList.add('indv-c');
			oneCourse.innerHTML = `

			<div class="card" style="width: 25rem">
				<img src="${courseImage}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${courseTitle}</h5>
					<p class="card-text">
					${courseDescription}
					</p>
					<p>${courseRating}</p>
					<p>Author: ${instructorName}</p>
					<p style="color: brown">${courseDuration} Students Enrolled</p>
					<a class="enroll btn btn-danger" onclick="enroll(${id}, ${index})">Enroll</a>
				</div>
			</div>`;

			courses.appendChild(oneCourse);
		}
	});
}

async function enroll(id, index) {
	var namee = '';
	let sess = Cookies.get('user');
	if (sess) {
		var z = [];
		var res = sess.split('&');
		for (let i of res) {
			var arg = i.split('=');
			z.push(arg);
		}
		namee = z[2][1];
		if (z[1][1] == 'student') {
			const c = await getCourses();

			studentCourse.courses.put({
				name: index,
				courseReference: id,
			});
			enrollBtn[index].style.backgroundColor = 'green';
			enrollBtn[index].innerHTML = 'Enrolled';

			let course = c[index];

			course.enrolled.push(namee);
			newCourse.course.put(course);

			// studentCourse.courses
			// 	.where('name')
			// 	.equals(index)
			// 	.delete()
			// 	.then(() => {
			// 		enrollBtn[index].style.backgroundColor = 'red';
			// 		enrollBtn[index].innerHTML = 'Enroll';
			// 	})
			// 	.catch(() => {
			// 		console.log('sada');
			// 	});
		} else {
			location = './login.html?login=1';
		}
	} else {
		location = './login.html?login=1';
	}
}
