window.onscroll = () => {
	const ScrollTopPosition = document.documentElement.scrollTop

	if (ScrollTopPosition > 50) {
		document.getElementById('header').style = `padding: 20px 0;
		box-shadow: 0px 0px 20px rgb(0 0 0 / 25%);
		`
	} else {
		document.getElementById('header').style = `padding: 50px 0;
		box-shadow: none;
		`
	}
}
