// // main Admin Activity
// const ManageCourses = document.querySelector('.manageCoursebtn');
// const approveCoursebtn = document.querySelector('.approveCoursebtn');
// const manageUserbtn = document.querySelector('.manageUserbtn');

const courseTitle = document.querySelector('#validationCustom01');
const coruseImage = document.querySelector('#validationCustom02');
const courseDuration = document.querySelector('#validationCustom03');
const courseStream = document.querySelector('#validationCustom04');
const coursePrice = document.querySelector('#validationCustom05');
const courseDescription = document.querySelector('#validationCustom06');
//dashboard
const studentsNum = document.querySelector('#studentsNum');
const instNum = document.querySelector('#instNum');
const coursesNum = document.querySelector('#coursesNum');
const activeUsers = document.querySelector('#activeUsers');
//
document.addEventListener('DOMContentLoaded', () => {
	// submit.addEventListener('click', askforPermission);
	// reset.addEventListener('click', resetValue);
	getInst().then((data_) => {
		instNum.innerHTML = data_.length;
	});
	getCourses().then((data_) => {
		coursesNum.innerHTML = data_.length;
	});
	getUsers().then((data_) => {
		studentsNum.innerHTML = data_.length;
		$('#table_id').DataTable({
			data: data_,
			columns: [{ data: 'id' }, { data: 'fullname' }, { data: 'role' }, { data: 'email' }, { data: 'password.' }],
		});
	});

	function uploadCourse() {
		courseDatabase.courses.put({
			courseName: courseTitle.value,
			courseTitle: courseTitle.value,
			courseDetail: courseTitle.value,
			courseImage: courseTitle.value,
		});
	}

	function resetValue() {
		courseTitle.value = '';
		coruseImage.value = '';
		courseDuration.value = '';
		courseStream.value = '';
		coursePrice.value = '';
		courseDescription.value = '';
	}

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
						uploadCourse();
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

async function getUsers() {
	let users = await newdb.users.toArray();
	return users;
}
async function getCourses() {
	let courses = await courseDatabase.courses.toArray();
	return courses;
}
async function getInst() {
	let inst = await newdb.users.toArray();
	return inst;
}

{
	/* <div class="card coursediv col-md-12">
                            <img src="${img}" class="courseimage card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 style="font-size:15px;color:cyan" class="card-title coursename">Name</h5>
                                
                                <h2 coursetitle style="font-size:15px;color:black">${title}</h2> 
                                
                                <p coursedetail style="" class="card-text">
                                ${detail}
                                </p>
                                <p>5⭐⭐⭐⭐⭐</p>
                                <p style="color: brown">100 Students Enrolled</p>
                                <a href="#" class="btn remove btn-danger"> remove Course</a>

                            </div>

                        </div>  */
}
