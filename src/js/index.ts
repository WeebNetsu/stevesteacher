jQuery(() => {
	$("div.video-thumbnail.navigation-image").on("click", (e) => {
		const clickedThumbnail = $(e.currentTarget);
		const centerThumbnail = $(".video-thumbnail").not(".navigation-image");

		// Get all images and links
		const thumbnails = $(".video-thumbnail");
		const images = thumbnails.find("img");
		const links = thumbnails.find("a");

		// Get index of the current center image
		const centerIndex = thumbnails.index(centerThumbnail);

		// Get the clicked direction (prev or next)
		const isPrev = clickedThumbnail.hasClass("prev");
		const isNext = clickedThumbnail.hasClass("next");

		// Move images based on the clicked direction
		let newCenterIndex;
		let untouchedImage;

		if (isPrev) {
			newCenterIndex =
				centerIndex === 0 ? thumbnails.length - 1 : centerIndex - 1;
			untouchedImage = $(".video-thumbnail.next");
		} else if (isNext) {
			untouchedImage = $(".video-thumbnail.prev");
			newCenterIndex =
				centerIndex === thumbnails.length - 1 ? 0 : centerIndex + 1;
		}

		console.log(untouchedImage);

		// Swap images and links in the right order
		const newCenterImage = images.eq(newCenterIndex ?? 0);
		const newCenterLink = links.eq(newCenterIndex ?? 0);

		// Temporarily store the current center image and link
		const tempSrc = images.eq(centerIndex).attr("src");
		const tempHref = links.eq(centerIndex).attr("href");

		// Swap the new center image with the old one
		images.eq(centerIndex).attr("src", newCenterImage.attr("src") ?? "");
		links.eq(centerIndex).attr("href", newCenterLink.attr("href") ?? "");

		newCenterImage.attr("src", tempSrc ?? "");
		newCenterLink.attr("href", tempHref ?? "");
	});
});
