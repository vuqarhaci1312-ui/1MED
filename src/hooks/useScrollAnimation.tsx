import { useEffect, useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const useScrollAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const textElements = gsap.utils.toArray<HTMLElement>('.text');
        const animations: gsap.core.Tween[] = [];

        const handleResize = () => {
            // Kill existing animations for these elements
            animations.forEach(anim => anim.kill());
            animations.length = 0;

            if (window.innerWidth > 1023) {
                textElements.forEach(text => {
                    const anim = gsap.to(text, {
                        backgroundSize: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: text,
                            start: 'center 100%',
                            end: 'center 50%',
                            scrub: true,
                            invalidateOnRefresh: true
                        },
                    });
                    animations.push(anim);
                });
            } else {
                ScrollTrigger.getAll().forEach(trigger => {
                    if (textElements.includes(trigger.trigger as HTMLElement)) {
                        trigger.kill();
                    }
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            animations.forEach(anim => anim.kill());
            ScrollTrigger.getAll().forEach(trigger => {
                if (textElements.includes(trigger.trigger as HTMLElement)) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return containerRef;
};

export default useScrollAnimation;
