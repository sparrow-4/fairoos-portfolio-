import { useEffect, useState } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    start?: number;
    isVisible?: boolean;
}

export const useCountUp = ({
    end,
    duration = 2000,
    start = 0,
    isVisible = true,
}: UseCountUpOptions) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(start + (end - start) * easeOut);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, start, isVisible]);

    return count;
};
