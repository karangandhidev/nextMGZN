
import { useEffect } from 'react';

const useToggleClassOnResize = () => {
  useEffect(() => {
    const toggleClassBasedOnWidth = () => {
      const body = document.querySelector('.heroPage-Container');
      const viewportWidth = window.innerWidth;
      const screenWidth = window.screen.width;

      // If the viewport Width is less than the screen Width, remove the min-Width class
      if (viewportWidth < screenWidth - 100) {
        body.classList.add('small-window');
      } else {
        body.classList.remove('small-window');
      }
    };

    // Initial check
    toggleClassBasedOnWidth();

    window.addEventListener('resize', toggleClassBasedOnWidth);

    return () => {
      window.removeEventListener('resize', toggleClassBasedOnWidth);
    };
  }, []);
};

export default useToggleClassOnResize;
