'use client';

import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedSection({ children, className = '' }: { children: ReactNode, className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            y: 40,
            opacity: 0,
            scale: 0.98,
            duration: 0.8,
            ease: 'back.out(1.2)',
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
}
