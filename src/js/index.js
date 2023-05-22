import { gsap } from "gsap";

// Add animation to submenus.
const headerSubmenus = document.querySelectorAll('.header ul li ul');
headerSubmenus.forEach((submenu) => {
  const submenuTimeline = gsap.timeline({
    paused: true,
    onStart: showSubmenu,
    onStartParams: [submenu],
    onReverseComplete: hideSubmenu,
    onReverseCompleteParams: [submenu],
  });

  // Add animation to the submenu.
  submenuTimeline.fromTo(submenu.querySelector('.drop-down-menu__background-3'), {
    scaleY: .25,
    opacity: 0,
  }, {
    opacity: 1,
    scaleY: 1,
    duration: 0.5,
    ease: "power4.out",
  });
  submenuTimeline.fromTo(submenu.querySelector('.drop-down-menu__background-2'), {
    scaleY: .25,
    opacity: 0,
  }, {
    opacity: 1,
    scaleY: 1,
    duration: 0.5,
    ease: "power4.out",
  }, '-=0.4');
  submenuTimeline.fromTo(submenu.querySelector('.drop-down-menu__background-1'), {
    scaleY: .25,
    opacity: 0,
  }, {
    opacity: 1,
    scaleY: 1,
    duration: 0.5,
    ease: "power4.out",
  }, '-=0.4');
  submenuTimeline.fromTo(submenu.querySelectorAll('li:not([class*="drop-down-menu__background"])'), {
    opacity: 0,
    x: -10,
  }, {
    opacity: 1,
    duration: 0.5,
    x: 0,
    stagger: 0.1,
  }, '-=0.4');

  // Add animation to the submenu element.
  submenu.animation = submenuTimeline;
});

// Set the display to flex when the animation starts.
function showSubmenu(submenu) {
  submenu.style.display = 'flex';
};

// Set the display to none when the animation ends.
function hideSubmenu(submenu) {
  submenu.style.display = 'none';
};

// Add event listeners to the header links.
const headerLinks = document.querySelectorAll('.header > .container > ul > li');
headerLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    const submenu = link.querySelector('ul');

    if (submenu) {
      // Play the animation.
      submenu.animation.timeScale(1).play();
    }
  });
  link.addEventListener('mouseleave', () => {
    const submenu = link.querySelector('ul');

    if (submenu) {
      // Reverse the animation.
      submenu.animation.timeScale(1.5).reverse();
    }
  });
});