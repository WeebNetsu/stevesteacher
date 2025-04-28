jQuery(() => {
	let isAnimating = false;

	$("div.video-thumbnail.navigation-image").on("click", (e) => {
		if (isAnimating) return;
		isAnimating = true;

		const clickedThumbnail = $(e.currentTarget);
		const isPrev = clickedThumbnail.hasClass("prev");

		// Get all thumbnails in order: prev, center, next
		const prevThumbnail = $(".video-thumbnail.prev");
		const centerThumbnail = $(".video-thumbnail").not(".navigation-image");
		const nextThumbnail = $(".video-thumbnail.next");

		// Store current state
		const prevImage = prevThumbnail.find("img");
		const centerImage = centerThumbnail.find("img");
		const nextImage = nextThumbnail.find("img");

		const prevLink = prevThumbnail.find("a");
		const centerLink = centerThumbnail.find("a");
		const nextLink = nextThumbnail.find("a");

		// Store current attributes with fallbacks
		const prevSrc = prevImage.attr("src") ?? "";
		const centerSrc = centerImage.attr("src") ?? "";
		const nextSrc = nextImage.attr("src") ?? "";

		const prevHref = prevLink.attr("href") ?? "#";
		const centerHref = centerLink.attr("href") ?? "#";
		const nextHref = nextLink.attr("href") ?? "#";

		// Set slide direction for center
		const direction = isPrev ? -1 : 1;
		centerThumbnail.css('--slide-x', `${direction * 100}%`);

		// 1. Slide center to the side
		centerThumbnail.addClass('slide-to-side');

		setTimeout(() => {
			// 2. Shake while at the side
			centerThumbnail.removeClass('slide-to-side');
			centerThumbnail.addClass('magic-shake');

			// 3. Mid-shake, swap image
			setTimeout(() => {
				if (isPrev) {
					prevImage.attr('src', nextSrc);
					centerImage.attr('src', prevSrc);
					nextImage.attr('src', centerSrc);

					prevLink.attr('href', nextHref);
					centerLink.attr('href', prevHref);
					nextLink.attr('href', centerHref);
				} else {
					prevImage.attr('src', centerSrc);
					centerImage.attr('src', nextSrc);
					nextImage.attr('src', prevSrc);

					prevLink.attr('href', centerHref);
					centerLink.attr('href', nextHref);
					nextLink.attr('href', prevHref);
				}
			}, 250); // Mid-shake (0.5s shake)

			// 4. After shake, slide back
			setTimeout(() => {
				centerThumbnail.removeClass('magic-shake');
				centerThumbnail.addClass('slide-back');

				setTimeout(() => {
					centerThumbnail.removeClass('slide-back');
					centerThumbnail.css('--slide-x', '0%');
					isAnimating = false;
				}, 300); // Slide-back duration
			}, 500); // Shake duration
		}, 300); // Slide-to-side duration
	});
});
