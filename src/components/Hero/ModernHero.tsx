import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

const ModernHero: React.FC = () => (
  <section
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)'
    }}
  >
    {/* Left Side: 3D Animation */}
    <div
      style={{
        flex: 1,
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[1.1, 64, 64]} />
            <MeshDistortMaterial
              color="#40c9ff"
              distort={0.5}
              speed={1.5}
              roughness={0.18}
              metalness={0.45}
            />
          </mesh>
        </Float>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
    {/* Right Side: Introduction */}
    <div
      style={{
        flex: 1,
        color: '#fff',
        padding: "3rem",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        zIndex: 2,
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        Welcome to <span style={{ color: '#40c9ff' }}>Your Website</span>
      </h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.88, marginBottom: '2rem', maxWidth: 450 }}>
        Discover a world where <b>innovation</b> meets <b>design</b>. Explore our features, experience seamless interactions, and dive into a digital journey built just for you.
      </p>
      <button
        style={{
          padding: '1rem 2rem',
          background: 'linear-gradient(90deg, #40c9ff 0%, #e81cff 100%)',
          border: 'none',
          borderRadius: '32px',
          color: '#fff',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'transform 0.2s',
          boxShadow: "0 4px 24px 0 rgba(64,201,255,0.12)"
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.06)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Get Started
      </button>
    </div>
  </section>
);

export default ModernHero;
