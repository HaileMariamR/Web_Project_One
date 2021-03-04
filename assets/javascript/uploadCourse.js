const lecturerFullName = document.querySelector('#first_name');
const courseTitle = document.querySelector('#validationCustom01');
const courseImage = document.querySelector('#validationCustom02');
const courseDuration = document.querySelector('#validationCustom03');
const courseStream = document.querySelector('#validationCustom04');
const coursePrice = document.querySelector('#validationCustom05');
const edit = document.querySelector('#edit');
const courseDescription = document.querySelector('#validationCustom06');

const courses = document.querySelector('.courses');

document.addEventListener('DOMContentLoaded', () => {
	let sess = Cookies.get('user');
	var name = '';
	if (sess) {
		var z = [];
		var res = sess.split('&');
		for (let i of res) {
			var arg = i.split('=');
			z.push(arg);
		}
		name = z[2][1];
	}

	function post() {
		let allrequiredinformation = {
			courseTitle: courseTitle.value,
			courseDescription: courseDescription.value,
			courseImage: courseImage.value,
			courseDuration: courseDuration.value,
			courseStream: courseStream.value,
			coursePrice: coursePrice.value,
			enrolled: [],
			instructorName: name,
		};

		newCourse.course.put(allrequiredinformation);
		resetValue();
	}

	function resetValue() {
		courseTitle.value = '';
		courseImage.value = '';
		courseDuration.value = '';
		courseStream.value = '';
		coursePrice.value = '';
		courseDescription.value = '';
	}

	edit.addEventListener('click', buildCourse(name));

	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function () {
		'use strict';
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.querySelectorAll('.needs-validation');

		// Loop over them and prevent submission
		Array.prototype.slice.call(forms).forEach(function (form) {
			form.addEventListener(
				'submit',
				function (event) {
					if (!form.checkValidity()) {
						event.preventDefault();
						event.stopPropagation();
					} else {
						event.preventDefault();
						post();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Your course have been uploaded',
							showConfirmButton: false,
							timer: 1500,
						});
					}

					form.classList.add('was-validated');
				},
				false
			);
		});
	})();
});
function buildCourse(namee) {
	getCourses().then((data) => {
		var sec = data.filter((course) => {
			return course.instructorName == namee;
		});

		if (sec.length == 0) {
			courses.innerHTML = 'Please upload a course first.';
			return;
		}
		courses.innerHTML = '';
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
					<span>${coursePrice}</span>
					<a class="edit btn btn-info" onclick="edit()">Edit</a>
					<a class="delete btn btn-info" onclick="delete()">Delete</a>
				</div>
			</div>`;

			courses.appendChild(oneCourse);
		}
	});
}
async function getCourses() {
	let courses = await newCourse.course.toArray();
	return courses;
}
