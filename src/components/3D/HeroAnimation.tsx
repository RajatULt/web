import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.vz = (Math.random() - 0.5) * 5;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;
        if (this.z < 0 || this.z > 1000) this.vz *= -1;
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = this.x * scale + canvas.offsetWidth / 2 * (1 - scale);
        const y2d = this.y * scale + canvas.offsetHeight / 2 * (1 - scale);
        const radius = scale * 3;

        ctx.globalAlpha = scale * 0.8;
        ctx.beginPath();
        ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* 3D Grid Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(0deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Central 3D Element */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-20 transform rotate-12"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg opacity-40 transform -rotate-6"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-md opacity-60 transform rotate-3"></div>
          <div className="absolute inset-6 bg-white dark:bg-gray-800 rounded flex items-center justify-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              WS
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};