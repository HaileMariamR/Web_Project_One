const email = document.querySelector('#navbarDropdown');
const logIn = document.querySelector('#logIn');
const si = document.querySelector('.si');

const profile = document.querySelector('#profile');
const role = document.querySelector('#role');

let sess = Cookies.get('user');
// console.log(sess);
if (sess) {
	var z = [];
	var res = sess.split('&');
	for (let i of res) {
		var arg = i.split('=');
		z.push(arg);
	}
	const r = z[1][1];

	email.textContent = z[0][1];
	role.textContent = z[1][1];
} else {
	logIn.style.display = '';
	si.style.display = '';
	profile.style.display = 'none';
}

function signOut() {
	Cookies.remove('user');
	location = './auth.html';
}

function confirmAlert() {
	Swal.fire({
		title: 'Sign out',
		text: 'Are you sure you want to sign out?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, sign out',
	}).then((result) => {
		if (result.isConfirmed) {
			signOut();
		}
	});
}

function checkAuth() {
	if (sess) {
		var z = [];
		var res = sess.split('&');
		for (let i of res) {
			var arg = i.split('=');
			z.push(arg);
		}
		let role = z[1][1];

		if (role == 'student') {
			location = './login.html?login=0';
		} else if (role == 'instructor') {
			location = './staff.html';
		} else if (role == 'admin') {
			location = './login.html?login=0';
		}
	} else {
		location = './login.html?login=0';
	}
}
