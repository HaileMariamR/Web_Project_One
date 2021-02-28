let sess = Cookies.get('user');
if (sess) {
	var z = [];
	var res = sess.split('&');
	for (let i of res) {
		var arg = i.split('=');
		z.push(arg);
	}
	// let email = z[0][1];
	let role = z[1][1];

	if (role == 'student') {
		location = './student.html';
	} else if (role == 'instructor') {
		location = './staff.html';
	} else if (role == 'admin') {
		location = './admin.html';
	}
} else {
	location = './auth.html';
}
