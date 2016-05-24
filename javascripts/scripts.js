var hamburger = document.querySelector('.hamburger');

if (hamburger) {

	hamburger.addEventListener('click', function(e) {

		this.classList.toggle('is-active');

	})

}
