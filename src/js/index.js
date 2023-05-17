import { gsap } from "gsap";

const headerSubmenus = document.querySelectorAll('.header ul li ul');

headerSubmenus.forEach((submenu) => {
  const submenuTimeline = gsap.timeline({
    paused: true,
    onStart: showSubmenu,
    onStartParams: [submenu],
    onReverseComplete: hideSubmenu,
    onReverseCompleteParams: [submenu],
  });

  submenuTimeline.fromTo(submenu, {
    opacity: 0,
    duration: 1
  }, {
    opacity: 1,
  });

  submenu.animation = submenuTimeline;
});

function showSubmenu(submenu) {
  submenu.style.display = 'flex';
};

function hideSubmenu(submenu) {
  submenu.style.display = 'none';
};

const headerLinks = document.querySelectorAll('.header > .container > ul > li');

headerLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    const submenu = link.querySelector('ul');

    if (submenu) {
      submenu.animation.play();
    }
  });
  link.addEventListener('mouseleave', () => {
    const submenu = link.querySelector('ul');

    if (submenu) {
      submenu.animation.reverse();
    }
  });
});