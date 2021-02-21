const lecturerFullName = document.querySelector('#first_name');

const courseTitle = document.querySelector('#validationCustom01');
const coruseImage = document.querySelector('#validationCustom02');
const courseDuration = document.querySelector('#validationCustom03');
const courseStream = document.querySelector('#validationCustom04');
const coursePrice = document.querySelector('#validationCustom05');
const courseDescription = document.querySelector('#validationCustom06');

document.addEventListener('DOMContentLoaded', () => {
	// submit.addEventListener('click', askforPermission);
	// reset.addEventListener('click', resetValue);

	function askforPermission() {
		let allrequiredinformation = {
			lecturerFullname: courseTitle.value,
			lecturerCountry: courseTitle.value,
			lecturerAddress: courseTitle.value,
			courseName: courseTitle.value,
			courseTitle: courseTitle.value,
			courseDiscription: courseTitle.value,
			courseImage: courseTitle.value,
			proposal: courseTitle.value,
		};

		yondahStaff.staffs.put(allrequiredinformation);
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
						askforPermission();
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
