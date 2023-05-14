let animItems = document.querySelectorAll('._anim-item');


const callback = function (entries, observer) {

	entries.forEach(entry => {
		const { target, isIntersecting, intersectionRatio } = entry;
		console.log(isIntersecting);
		console.log(intersectionRatio);

		if (isIntersecting) {
			target.classList.add('_active');
		} else {
			if (!target.classList.contains('_anim-no-high')) {
				target.classList.remove('_active');
			};
		};
	});
};


const options = {
	threshold: 0,
	// rootMargin: "-150px 0px 0px 0px"
};

const observer = new IntersectionObserver(callback, options);





if (animItems.length > 0) {
	animItems.forEach(animItem => {
		observer.observe(animItem);
	})
}
