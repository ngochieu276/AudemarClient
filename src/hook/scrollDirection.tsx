import { useState, useEffect } from 'react';

export enum ScroolDirection {
  up = 'up',
  down = 'down'
} 

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<ScroolDirection | null>(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? ScroolDirection.down : ScroolDirection.up;
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]); // run when scroll direction changes

    return scrollDirection;
};