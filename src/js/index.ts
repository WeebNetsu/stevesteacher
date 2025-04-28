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

		// Add animation classes
		const direction = isPrev ? -1 : 1;
		prevThumbnail.css("transform", `translateX(${direction * 100}%)`);
		centerThumbnail.css("transform", `translateX(${direction * 100}%)`);
		nextThumbnail.css("transform", `translateX(${direction * 100}%)`);

		// Wait for animation to complete
		setTimeout(() => {
			// Reset transforms
			prevThumbnail.css("transform", "");
			centerThumbnail.css("transform", "");
			nextThumbnail.css("transform", "");

			if (isPrev) {
				// Rotate counter-clockwise: prev -> center -> next
				prevImage.attr("src", nextSrc);
				centerImage.attr("src", prevSrc);
				nextImage.attr("src", centerSrc);

				prevLink.attr("href", nextHref);
				centerLink.attr("href", prevHref);
				nextLink.attr("href", centerHref);
			} else {
				// Rotate clockwise: prev <- center <- next
				prevImage.attr("src", centerSrc);
				centerImage.attr("src", nextSrc);
				nextImage.attr("src", prevSrc);

				prevLink.attr("href", centerHref);
				centerLink.attr("href", nextHref);
				nextLink.attr("href", prevHref);
			}

			isAnimating = false;
		}, 500); // Match this with the CSS transition duration
	});
});
