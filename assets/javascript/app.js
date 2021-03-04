const teach = document.querySelector('#teach');
const info = document.querySelector('#stud');

const courses = document.querySelectorAll('.courses');
var enrollBtn = '';

document.addEventListener('DOMContentLoaded', () => {
	buildCourse('');
	enrollBtn = document.getElementsByClassName('enroll');
	let ses = Cookies.get('user');
	if (!ses) {
		info.innerHTML = 'Start lrarning today.';
	} else {
		var z = [];
		var res = sess.split('&');
		for (let i of res) {
			var arg = i.split('=');
			z.push(arg);
		}
		namee = z[2][1];
		info.innerHTML = `Welcome ${namee}, choose a course you would like to learn.`;
	}
});

async function getCourses() {
	let courses = await newCourse.course.toArray();
	return courses;
}

function buildCourse(section) {
	getCourses().then((data) => {
		var sec = data.filter((course) => {
			if (section == '') {
				return data;
			}
			return course.courseStream == section;
		});

		if (section == '') {
			courses[0].innerHTML = '';
		} else if (section == 'IT') {
			courses[1].innerHTML = '';
		} else {
			courses[2].innerHTML = '';
		}
		for (let index = 0; index < sec.length; index++) {
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
			} = sec[index];

			let oneCourse = document.createElement('div');
			oneCourse.classList.add('col-md-3');
			oneCourse.classList.add('indv-c');
			oneCourse.innerHTML = `

			<div class="card" style="width: 25rem">
				<img src="${courseImage}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${courseTitle}</h5>
					<p>Author: ${instructorName}</p>
					<p>Duration:  ${courseDuration}</p>
					<p style="color: brown">${enrolled.length} Students Enrolled</p>
					
					<a class="enroll btn btn-danger" onclick="enroll(${id}, ${index})">Enroll</a>
					<span>${coursePrice}</span>
				</div>
			</div>`;

			if (section == '') {
				courses[0].appendChild(oneCourse);
			} else if (section == 'IT') {
				courses[1].appendChild(oneCourse);
			} else {
				courses[2].appendChild(oneCourse);
			}
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
