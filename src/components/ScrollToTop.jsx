import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // change to 'smooth' if preferred
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
