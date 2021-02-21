const email = document.querySelector('#navbarDropdown');
const logIn = document.querySelector('#logIn');

const profile = document.querySelector('#profile');

let sess = Cookies.get('user');
// console.log(sess);
if (sess) {
	var z = [];
	var res = sess.split('&');
	for (let i of res) {
		var arg = i.split('=');
		z.push(arg);
	}
	email.textContent = z[0][1];
} else {
	logIn.style.display = '';
	profile.style.display = 'none';
}

function signOut() {
	Cookies.remove('user');
	location = './auth.html';
}
