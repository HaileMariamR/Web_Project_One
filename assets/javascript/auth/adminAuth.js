const email = document.querySelector('#navbarDropdown');
const logIn = document.querySelector('#logIn');

const profile = document.querySelector('#profile');
const role = document.querySelector('#role');

let sess = Cookies.get('user');
console.log(sess);
if (sess) {
	var z = [];
	var res = sess.split('&');
	for (let i of res) {
		var arg = i.split('=');
		z.push(arg);
	}
	email.textContent = z[0][1];
	role.textContent = z[1][1];
} else {
	logIn.style.display = '';
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
