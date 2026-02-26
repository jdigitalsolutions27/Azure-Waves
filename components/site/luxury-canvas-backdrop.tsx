"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type LuxuryCanvasBackdropProps = {
  className?: string;
};

export function LuxuryCanvasBackdrop({ className }: LuxuryCanvasBackdropProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let raf = 0;
    let paused = false;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGlowOrb = (x: number, y: number, radius: number, colorA: string, colorB: string) => {
      const gradient = context.createRadialGradient(x, y, radius * 0.2, x, y, radius);
      gradient.addColorStop(0, colorA);
      gradient.addColorStop(1, colorB);
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const drawWaves = (time: number) => {
      const waveSets = [
        { y: height * 0.38, amp: 24, period: 220, speed: 0.6, color: "rgba(94, 196, 216, 0.26)", width: 2.2 },
        { y: height * 0.5, amp: 30, period: 260, speed: 0.44, color: "rgba(126, 223, 233, 0.2)", width: 1.8 },
        { y: height * 0.63, amp: 26, period: 300, speed: 0.34, color: "rgba(24, 87, 140, 0.18)", width: 2.4 },
      ];

      for (const wave of waveSets) {
        context.beginPath();
        context.lineWidth = wave.width;
        context.strokeStyle = wave.color;
        for (let x = -40; x <= width + 40; x += 6) {
          const y =
            wave.y +
            Math.sin((x + time * wave.speed * 90) / wave.period * (Math.PI * 2)) * wave.amp +
            Math.sin((x - time * wave.speed * 40) / (wave.period * 0.6) * (Math.PI * 2)) * (wave.amp * 0.32);
          if (x <= -40) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }
    };

    const animate = () => {
      if (paused) return;
      frame += 1;
      const t = frame / 60;

      context.clearRect(0, 0, width, height);

      drawGlowOrb(width * 0.16 + Math.sin(t * 0.45) * 20, height * 0.2, Math.max(90, width * 0.1), "rgba(120, 205, 222, 0.16)", "rgba(120, 205, 222, 0)");
      drawGlowOrb(width * 0.84 + Math.cos(t * 0.38) * 18, height * 0.72, Math.max(110, width * 0.12), "rgba(10, 66, 118, 0.15)", "rgba(10, 66, 118, 0)");
      drawGlowOrb(width * 0.48 + Math.sin(t * 0.3) * 14, height * 0.95, Math.max(120, width * 0.16), "rgba(137, 214, 189, 0.13)", "rgba(137, 214, 189, 0)");

      drawWaves(t);

      if (!reduceMotion && !smallScreen) {
        raf = window.requestAnimationFrame(animate);
      }
    };

    resize();
    animate();

    if (!reduceMotion && !smallScreen) {
      const onResize = () => resize();
      const onVisibilityChange = () => {
        paused = document.hidden;
        if (!paused) animate();
      };
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        window.cancelAnimationFrame(raf);
      };
    }

    return undefined;
  }, []);

  return <canvas ref={canvasRef} className={cn("pointer-events-none select-none", className)} aria-hidden="true" />;
}
