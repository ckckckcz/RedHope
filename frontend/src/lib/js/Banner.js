const scrollContainer = document.getElementById("scroll-container-1");
    if (scrollContainer) {
        let scrollPosition = 0;

        const animateScroll = () => {
            scrollPosition -= 1;
            scrollContainer.style.transform = `translateX(${scrollPosition}px)`;

            const firstChild = scrollContainer.firstElementChild;
            if (firstChild && firstChild.getBoundingClientRect().right < 0) {
                scrollContainer.appendChild(firstChild);
                scrollPosition += firstChild.offsetWidth;
            }

            requestAnimationFrame(animateScroll);
        };

        const cloneContent = () => {
            const children = Array.from(scrollContainer.children);
            children.forEach((child) => {
                const clone = child.cloneNode(true);
                scrollContainer.appendChild(clone);
            });
        };

        const items = [
            `<span class="text-white lg:text-[35px] text-xl font-semibold">Blood Donation</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">✦</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">Save Lives</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">✦</span>`,
        ];

        for (let i = 0; i < 10; i++) {
            items.forEach((item) => {
                scrollContainer.innerHTML += item;
            });
        }
        cloneContent();
        animateScroll();
    }
const scrollContainer2 = document.getElementById("scroll-container-2");
    if (scrollContainer2) {
        let scrollPosition = 0;

        const animateScroll = () => {
            scrollPosition -= 1;
            scrollContainer2.style.transform = `translateX(${scrollPosition}px)`;

            const firstChild = scrollContainer2.firstElementChild;
            if (firstChild && firstChild.getBoundingClientRect().right < 0) {
                scrollContainer2.appendChild(firstChild);
                scrollPosition += firstChild.offsetWidth;
            }

            requestAnimationFrame(animateScroll);
        };

        const cloneContent = () => {
            const children = Array.from(scrollContainer2.children);
            children.forEach((child) => {
                const clone = child.cloneNode(true);
                scrollContainer2.appendChild(clone);
            });
        };

        const items = [
            `<span class="text-white lg:text-[35px] text-xl font-semibold">Blood Donation</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">✦</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">Save Lives</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">✦</span>`,
        ];

        for (let i = 0; i < 10; i++) {
            items.forEach((item) => {
                scrollContainer2.innerHTML += item;
            });
        }
        cloneContent();
        animateScroll();
    }
const scrollContainer3 = document.getElementById("scroll-container-3");
    if (scrollContainer3) {
        let scrollPosition = 0;

        const animateScroll = () => {
            scrollPosition -= 1;
            scrollContainer3.style.transform = `translateX(${scrollPosition}px)`;

            const firstChild = scrollContainer3.firstElementChild;
            if (firstChild && firstChild.getBoundingClientRect().right < 0) {
                scrollContainer3.appendChild(firstChild);
                scrollPosition += firstChild.offsetWidth;
            }

            requestAnimationFrame(animateScroll);
        };

        const cloneContent = () => {
            const children = Array.from(scrollContainer3.children);
            children.forEach((child) => {
                const clone = child.cloneNode(true);
                scrollContainer3.appendChild(clone);
            });
        };

        const items = [
            `<span class="text-white lg:text-[35px] text-xl font-semibold">Blood Donation</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">✦</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">Save Lives</span>`,
            `<span class="text-white lg:text-[35px] text-xl font-semibold">✦</span>`,
        ];

        for (let i = 0; i < 10; i++) {
            items.forEach((item) => {
                scrollContainer3.innerHTML += item;
            });
        }
        cloneContent();
        animateScroll();
    }