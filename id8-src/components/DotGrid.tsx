'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function DotGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const parent = canvas.parentElement;
        if (!parent) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const spacing = 32;
        const radius = 1;

        let dots: { x: number; y: number; originX: number; originY: number }[] = [];
        let animationFrameId: number;

        const resize = () => {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;

            dots = [];
            const cols = Math.floor(canvas.width / spacing) + 1;
            const rows = Math.floor(canvas.height / spacing) + 1;

            const offsetX = (canvas.width % spacing) / 2;
            const offsetY = (canvas.height % spacing) / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing + offsetX;
                    const y = j * spacing + offsetY;
                    dots.push({ x, y, originX: x, originY: y });
                }
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            resize();
        });
        resizeObserver.observe(parent);

        // Initial sizing
        resize();

        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;

            const maxDistance = 150;
            const magneticPull = 0.4;

            dots.forEach((dot) => {
                const dx = mouse.x - dot.originX;
                const dy = mouse.y - dot.originY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const targetX = dot.originX + dx * force * magneticPull;
                    const targetY = dot.originY + dy * force * magneticPull;

                    gsap.to(dot, {
                        x: targetX,
                        y: targetY,
                        duration: 0.4,
                        ease: 'power2.out',
                        overwrite: 'auto',
                    });
                } else {
                    if (dot.x !== dot.originX || dot.y !== dot.originY) {
                        gsap.to(dot, {
                            x: dot.originX,
                            y: dot.originY,
                            duration: 0.8,
                            ease: 'elastic.out(1, 0.3)',
                            overwrite: 'auto',
                        });
                    }
                }
            });
        };

        const handleMouseLeave = () => {
            dots.forEach((dot) => {
                gsap.to(dot, {
                    x: dot.originX,
                    y: dot.originY,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.3)',
                    overwrite: 'auto',
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff41';

            dots.forEach((dot) => {
                ctx.beginPath();
                // The previous CSS gradient used 1px dots
                ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
            gsap.killTweensOf(dots);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        />
    );
}
