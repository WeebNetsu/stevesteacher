"use strict";
jQuery(() => {
    let isAnimating = false;
    $("div.video-thumbnail.navigation-image").on("click", (e) => {
        var _a, _b, _c, _d, _e, _f;
        if (isAnimating)
            return;
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
        const prevSrc = (_a = prevImage.attr("src")) !== null && _a !== void 0 ? _a : "";
        const centerSrc = (_b = centerImage.attr("src")) !== null && _b !== void 0 ? _b : "";
        const nextSrc = (_c = nextImage.attr("src")) !== null && _c !== void 0 ? _c : "";
        const prevHref = (_d = prevLink.attr("href")) !== null && _d !== void 0 ? _d : "#";
        const centerHref = (_e = centerLink.attr("href")) !== null && _e !== void 0 ? _e : "#";
        const nextHref = (_f = nextLink.attr("href")) !== null && _f !== void 0 ? _f : "#";
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
                }
                else {
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
