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

	function adduser(e) {
		e.preventDefault();

		if (!sUserName.value == '' && !email.value == '' && !sPassword.value == '') {
			if (sPassword.value === sVPassword.value) {
				newdb.users.put({
					fullname: sUserName.value,
					email: email.value,
					role: sRole.value,
					password: sPassword.value,
				});
				location.href = './index.html';
			}
		}
		Cookies.set('user', `email=${email.value}&role=${sRole.value}`, { expires: 7 });
		sUserName.value = '';
		email.value = '';
		sPassword.value = '';
		sVPassword.value = '';
	}

	// Login

	async function userAuthentication(event) {
		event.preventDefault();

		userName = lUserName.value;
		userpass = lPassword.value;

		let users = await newdb.users.toArray();

		for (let index in users) {
			if (userName === users[index].fullname && userpass === users[index].password) {
				Cookies.set('user', `email=${users[index].email}&role=${users[index].role}`, { expires: 7 });
				// location = './student.html';
				break;
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'Wrong credentials!',
					backdrop: `
                    rgba(0,0,12,0.4)    
                   `,
				});
				break;
			}
		}

		lUserName.value = '';
		lPassword.value = '';
	}
});
