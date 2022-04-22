import simpleParallax from 'simple-parallax-js';

export function jsParallax() {
    let header = document.querySelectorAll('.prllx-0');
    new simpleParallax(header, {
        orientation: 'up',
        scale: 2,
        overflow: false,
        delay: 2,
    });

    let section_1 = document.querySelectorAll('.prllx-1');
    new simpleParallax(section_1, {
        orientation: 'left',
        scale: 1.25,
        overflow: false,
    });

    let section_2 = document.querySelectorAll('.prllx-2');
    new simpleParallax(section_2, {
        orientation: 'up',
        scale: 1.5,
        overflow: false,
        delay: 2,
    });

    let section_3 = document.querySelectorAll('.prllx-3');
    new simpleParallax(section_3, {
        orientation: 'down',
        scale: 1.5,
        overflow: false,
    });

    let section_4 = document.querySelectorAll('.prllx-4');
    new simpleParallax(section_4, {
        orientation: 'up',
        scale: 1.5,
        overflow: false,
    });
};