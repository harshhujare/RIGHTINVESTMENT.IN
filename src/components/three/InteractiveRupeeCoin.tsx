"use client";

// ─── Interactive 3D Rupee Coin ─────────────────────────────────────────────
// Procedural sovereign ₹1 coin built entirely with Three.js primitives.
// No external .glb files — geometry is constructed from cylinders + text.
// Uses IntersectionObserver for viewport-based pause (performance).

import { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

// ── Constants ────────────────────────────────────────────────────────────────
const COIN_RADIUS = 2;
const COIN_THICKNESS = 0.25;
const RIM_RADIUS = 2.05;
const RIM_THICKNESS = 0.28;
const SEGMENTS = 64;
const RIDGE_COUNT = 48;

// ── Materials ────────────────────────────────────────────────────────────────
const GOLD_BODY = { color: "#D4AF37", metalness: 0.88, roughness: 0.22 };
const BRASS_RIM = { color: "#B8860B", metalness: 0.9, roughness: 0.18 };
const TEXT_COLOR = "#6B4E2F";

// ── Rupee Coin Mesh ──────────────────────────────────────────────────────────
function RupeeCoin() {
  const groupRef = useRef<THREE.Group>(null!);
  const isDragging = useRef(false);
  const previousPointer = useRef({ x: 0, y: 0 });
  const rotationVelocity = useRef({ x: 0, y: 0 });
  const { pointer } = useThree();

  // ── Mouse-follow parallax + drag-to-spin ────────────────────────────────
  useFrame(() => {
    if (!groupRef.current) return;

    if (isDragging.current) {
      // Apply drag velocity
      groupRef.current.rotation.y += rotationVelocity.current.x;
      groupRef.current.rotation.x += rotationVelocity.current.y;
      // Decay velocity
      rotationVelocity.current.x *= 0.95;
      rotationVelocity.current.y *= 0.95;
    } else {
      // Subtle parallax toward mouse position
      const targetX = pointer.y * 0.3;
      const targetY = pointer.x * 0.3;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.05
      );
    }
  });

  const handlePointerDown = useCallback(
    (e: any) => {
      isDragging.current = true;
      previousPointer.current = { x: pointer.x, y: pointer.y };
      // Capture pointer events
      (e as any).target?.setPointerCapture?.((e as any).pointerId);
    },
    [pointer]
  );

  const handlePointerMove = useCallback(() => {
    if (!isDragging.current) return;
    const dx = pointer.x - previousPointer.current.x;
    const dy = pointer.y - previousPointer.current.y;
    rotationVelocity.current = { x: dx * 3, y: -dy * 3 };
    previousPointer.current = { x: pointer.x, y: pointer.y };
  }, [pointer]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group
        ref={groupRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* ── Main Coin Body ──────────────────────────────────────────── */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry
            args={[COIN_RADIUS, COIN_RADIUS, COIN_THICKNESS, SEGMENTS]}
          />
          <meshStandardMaterial {...GOLD_BODY} />
        </mesh>

        {/* ── Outer Rim ───────────────────────────────────────────────── */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry
            args={[RIM_RADIUS, RIM_RADIUS, RIM_THICKNESS, SEGMENTS]}
          />
          <meshStandardMaterial {...BRASS_RIM} side={THREE.BackSide} />
        </mesh>

        {/* ── Edge Ridges (decorative ring of tiny boxes) ─────────────── */}
        <EdgeRidges />

        {/* ── Front Face — ₹ Symbol ──────────────────────────────────── */}
        <Text
          position={[0, 0, COIN_THICKNESS / 2 + 0.001]}
          fontSize={1.2}
          color={TEXT_COLOR}
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          ₹
        </Text>

        {/* ── Back Face — Denomination ────────────────────────────────── */}
        <Text
          position={[0, 0.2, -(COIN_THICKNESS / 2 + 0.001)]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.8}
          color={TEXT_COLOR}
          anchorX="center"
          anchorY="middle"
        >
          1
        </Text>

        {/* ── Back Face — Ring Text ───────────────────────────────────── */}
        <Text
          position={[0, -0.5, -(COIN_THICKNESS / 2 + 0.001)]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.18}
          color={TEXT_COLOR}
          anchorX="center"
          anchorY="middle"
          maxWidth={3}
          textAlign="center"
        >
          RIGHT INVESTMENT • PUNE
        </Text>
      </group>
    </Float>
  );
}

// ── Edge Ridges — ring of small boxes around the coin perimeter ──────────────
function EdgeRidges() {
  const ridges = [];
  for (let i = 0; i < RIDGE_COUNT; i++) {
    const angle = (i / RIDGE_COUNT) * Math.PI * 2;
    const x = Math.cos(angle) * COIN_RADIUS;
    const y = Math.sin(angle) * COIN_RADIUS;
    ridges.push(
      <mesh
        key={i}
        position={[x, y, 0]}
        rotation={[0, 0, angle + Math.PI / 2]}
      >
        <boxGeometry args={[0.08, 0.18, COIN_THICKNESS * 0.7]} />
        <meshStandardMaterial {...BRASS_RIM} />
      </mesh>
    );
  }
  return <>{ridges}</>;
}

// ── Exported Scene with Canvas + Viewport Detection ──────────────────────────
export default function InteractiveRupeeCoin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  // ── IntersectionObserver for viewport-based pause ────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="aspect-square w-full max-w-lg mx-auto"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        frameloop={isInView ? "always" : "never"}
        style={{ width: "100%", height: "100%" }}
        role="img"
        aria-label="Interactive 3D Rupee coin representing Right Investment's wealth building services. Drag to rotate."
      >
        {/* ── Lighting ──────────────────────────────────────────────── */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} intensity={0.3} color="#C88A2B" />

        {/* ── Coin ──────────────────────────────────────────────────── */}
        <RupeeCoin />
      </Canvas>
    </div>
  );
}
