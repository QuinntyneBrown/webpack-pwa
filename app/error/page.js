export function open(err) {
	document.body.innerHTML = "<h1>Error happend: </h1>";
	document.querySelector("h1").innerText = err.message;
	return Promise.resolve();
}

export function close() {
	return Promise.resolve();
}