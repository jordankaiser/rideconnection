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
  submenuTimeline.fromTo(submenu, {
    opacity: 0,
    duration: 1
  }, {
    opacity: 1,
  });

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
      submenu.animation.play();
    }
  });
  link.addEventListener('mouseleave', () => {
    const submenu = link.querySelector('ul');

    if (submenu) {
      // Reverse the animation.
      submenu.animation.reverse();
    }
  });
});