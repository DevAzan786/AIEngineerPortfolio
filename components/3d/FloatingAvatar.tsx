'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

import avatar from '@/images/avatar.png';

type Tilt = { rx: number; ry: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function FloatingAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef<Tilt>({ rx: 0, ry: 0 });
  const currentRef = useRef<Tilt>({ rx: 0, ry: 0 });
  const [tilt, setTilt] = useState<Tilt>({ rx: 0, ry: 0 });

  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const tick = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;

      // Simple smoothing.
      cur.rx += (tgt.rx - cur.rx) * 0.12;
      cur.ry += (tgt.ry - cur.ry) * 0.12;

      setTilt({ rx: cur.rx, ry: cur.ry });
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reduceMotion) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1

      const max = 10; // degrees
      const ry = clamp((px - 0.5) * (max * 2), -max, max);
      const rx = clamp((0.5 - py) * (max * 2), -max, max);

      targetRef.current = { rx, ry };
    };

    const onLeave = () => {
      targetRef.current = { rx: 0, ry: 0 };
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none"
      style={{ perspective: '1200px' }}
      aria-label="Avatar 3D visual"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 rounded-3xl blur-3xl opacity-70 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />

      <div
        className="relative mx-auto h-full max-h-[420px] aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-surface/60 to-surface-light/30 backdrop-blur-md shadow-2xl shadow-black/40 animate-float"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
          transformStyle: 'preserve-3d',
          transition: reduceMotion ? 'transform 200ms ease' : undefined,
        }}
      >
        {/* subtle highlight */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            transform: 'translateZ(20px)',
            background:
              'radial-gradient(600px circle at 20% 15%, rgba(255,255,255,0.10), transparent 40%), radial-gradient(500px circle at 80% 70%, rgba(59,130,246,0.10), transparent 45%)',
          }}
        />

        <div
          className="absolute inset-4 rounded-2xl overflow-hidden border border-white/10 bg-background"
          style={{ transform: 'translateZ(35px)' }}
        >
          <Image
            src={avatar}
            alt="Azan Ali avatar"
            fill
            priority
            sizes="(min-width: 768px) 420px, 100vw"
            className="object-cover"
          />
        </div>

        {/* edge glow */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            transform: 'translateZ(10px)',
            boxShadow:
              '0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 60px rgba(0,0,0,0.45), 0 0 40px rgba(59,130,246,0.12)',
          }}
        />
      </div>
    </div>
  );
}

