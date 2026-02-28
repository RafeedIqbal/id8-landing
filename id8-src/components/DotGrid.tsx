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

        let dots: { x: number; y: number; originX: number; originY: number; scale: number; alpha: number }[] = [];
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
                    dots.push({ x, y, originX: x, originY: y, scale: 1, alpha: 0.5 });
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
        let isHovering = false;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            isHovering = true;
        };

        const handleMouseLeave = () => {
            isHovering = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const maxDistance = 200;
            const magneticPull = 0.6; // Stronger pull

            dots.forEach((dot) => {
                if (isHovering) {
                    const dx = mouse.x - dot.originX;
                    const dy = mouse.y - dot.originY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const force = Math.pow((maxDistance - distance) / maxDistance, 2); // Exponetial falloff for smoother easing
                        const targetX = dot.originX + dx * force * magneticPull;
                        const targetY = dot.originY + dy * force * magneticPull;

                        // Dynamic glow/scale based on how close the mouse is
                        const targetScale = 1 + force * 2.5;
                        const targetAlpha = 0.5 + force * 0.5;

                        gsap.to(dot, {
                            x: targetX,
                            y: targetY,
                            scale: targetScale,
                            alpha: targetAlpha,
                            duration: 0.6,
                            ease: 'power3.out',
                            overwrite: 'auto',
                        });
                    } else {
                        resetDot(dot);
                    }
                } else {
                    resetDot(dot);
                }

                ctx.beginPath();
                ctx.fillStyle = `rgba(0, 255, 65, ${dot.alpha})`;

                // Add glow effect if the dot is being pulled
                if (dot.scale > 1.1) {
                    ctx.shadowBlur = 15 * (dot.scale - 1);
                    ctx.shadowColor = '#00ff41';
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.arc(dot.x, dot.y, radius * dot.scale, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0; // Reset for performance on unused dots
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const resetDot = (dot: any) => {
            if (dot.x !== dot.originX || dot.y !== dot.originY || dot.scale !== 1 || dot.alpha !== 0.5) {
                gsap.to(dot, {
                    x: dot.originX,
                    y: dot.originY,
                    scale: 1,
                    alpha: 0.5,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.4)', // Smoother spring back
                    overwrite: 'auto',
                });
            }
        }

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
            className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        />
    );
}
