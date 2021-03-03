const checkboxuser = document.querySelector('#checkboxuser');
const checkboxadmin = document.querySelector('#checkboxadmin');
//login
const lUserName = document.querySelector('#lUserName');
const lPassword = document.querySelector('#lPassword');
//signup
const sUserName = document.querySelector('#sUserName');
const email = document.querySelector('#email');
const sPassword = document.querySelector('#sPassword');
const sVPassword = document.querySelector('#sVPassword');
const sRole = document.querySelector('#sRole');
//submit bttns
const lSubmit = document.querySelector('#lSubmit');
const sSubmit = document.querySelector('#sSubmit');

document.addEventListener('DOMContentLoaded', () => {
	sSubmit.addEventListener('click', adduser);
	lSubmit.addEventListener('click', userAuthentication);

	async function adduser(e) {
		e.preventDefault();
		let users = await newdb.users.toArray();

		if (!sUserName.value == '' && !email.value == '' && !sPassword.value == '') {
			if (sPassword.value === sVPassword.value) {
				for (let index in users) {
					if (email === users[index].email.value || sUserName.value === users[index].fullname) {
						Swal.fire({
							icon: 'error',
							title: 'Error',
							text: 'Another user alredy registered with these credentials!',
							backdrop: `
							rgba(0,0,12,0.4)
						   `,
						});
						sUserName.value = '';
						email.value = '';
						sPassword.value = '';
						sVPassword.value = '';
						return;
					}
				}
				newdb.users.put({
					fullname: sUserName.value,
					email: email.value,
					role: sRole.value,
					password: sPassword.value,
				});
				Cookies.set('user', `email=${email.value}&role=${sRole.value}&name=${sUserName.value}`, { expires: 7 });
				location.href = './index.html';
			}
		} else {
			//tell the user
			console.log('empty');
		}

		sUserName.value = '';
		email.value = '';
		sPassword.value = '';
		sVPassword.value = '';
	}

	// Login

	async function userAuthentication(event) {
		event.preventDefault();

		let users = await newdb.users.toArray();

		for (let index in users) {
			if (lUserName.value == users[index].fullname && lPassword.value == users[index].password) {
				Cookies.set(
					'user',
					`email=${users[index].email}&role=${users[index].role}&name=${users[index].fullname}`,
					{ expires: 7 }
				);
				location.href = './index.html';
				return;
			}
		}

		Swal.fire({
			icon: 'error',
			title: 'Error',
			text: 'Wrong credentials!',
			backdrop: `
		    rgba(0,0,12,0.4)
		   `,
		});

		lUserName.value = '';
		lPassword.value = '';
	}
	//////////////
	const urlParams = new URLSearchParams(window.location.search);
	const page = urlParams.get('login');

	if (page == 0) {
		Swal.fire({
			title: 'Not Authorized!',
			html: 'Please Login as an Instructor first.',
			timer: 1500,
			position: 'bottom-end',
			icon: 'info',
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
			},
		});
	}
	if (page == 1) {
		Swal.fire({
			html: 'Please Login as Student first.',
			timer: 1500,
			position: 'bottom-end',
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
			},
		});
	}
});
