
import { useEffect } from 'react';

const useToggleClassOnResize = (sectionClass: string) => {
  useEffect(() => {
    const toggleClassBasedOnWidth = () => {
      const body = document.querySelector(sectionClass);
      const viewportWidth = window.innerWidth;
      var screenWidth = window.screen.width*0.95;
      console.log(screenWidth)
      console.log(viewportWidth)

      // If the viewport Width is less than the screen Width, remove the min-Width class
      if ((viewportWidth < screenWidth) && (viewportWidth > 640)) {
        body?.classList.add('small-window');
      } else {
        body?.classList.remove('small-window');
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
