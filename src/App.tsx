import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';

import '../src/assets/css/animate.css';
import '../src/assets/css/font-awesome.css';
import '../src/assets/css/flaticon-set.css';

import '../src/assets/css/helper.css';
import '../src/assets/css/unit-test.css';
import '../src/assets/css/validnavs.css';
import '../src/assets/css/style.css';
import '../src/assets/css/theme-transitions.css';
import '../src/assets/css/custom-fixes.css';

import Routers from './Routers';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import Dependency from './components/utilities/Dependency';
import { useEffect, useState } from 'react';
import Preloader from './components/utilities/Preloader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

function App() {

  //  Preloader 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  // Refresh ScrollTrigger after content loads
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [isLoading])

  return (
    <>
      {isLoading ? <Preloader /> :
        <>
          <Routers />
          <RoutesScrollToTop />
          <Dependency />
        </>
      }
    </>
  )
}

export default App