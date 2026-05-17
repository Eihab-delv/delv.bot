"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RobotSilhouette({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth  || 480;
    const H = el.clientHeight || 640;

    // ── RENDERER ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // ── SCENE / CAMERA ───────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, W / H, 0.1, 100);
    // Pull back further and look at the arm mid-section
    camera.position.set(0, 1.2, 10);
    camera.lookAt(0, -0.5, 0);

    // ── MATERIALS ────────────────────────────────────────────────────────────
    const matDark    = new THREE.MeshStandardMaterial({ color: 0x14121e, metalness: 0.95, roughness: 0.22 });
    const matMid     = new THREE.MeshStandardMaterial({ color: 0x1e1b2e, metalness: 0.92, roughness: 0.26 });
    const matLight   = new THREE.MeshStandardMaterial({ color: 0x2a2640, metalness: 0.90, roughness: 0.18 });
    const matChrome  = new THREE.MeshStandardMaterial({ color: 0x5a5888, metalness: 0.99, roughness: 0.05 });
    const matJoint   = new THREE.MeshStandardMaterial({ color: 0x0a0912, metalness: 0.96, roughness: 0.40 });

    const matGlowV   = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0xa855f7, emissiveIntensity: 5, roughness: 0, metalness: 0 });
    const matGlowB   = new THREE.MeshStandardMaterial({ color: 0x93c5fd, emissive: 0x3b82f6, emissiveIntensity: 5, roughness: 0, metalness: 0 });
    const matGlowG   = new THREE.MeshStandardMaterial({ color: 0x6ee7b7, emissive: 0x10b981, emissiveIntensity: 5, roughness: 0, metalness: 0 });

    const matCrystal = new THREE.MeshStandardMaterial({ color: 0xe9d5ff, emissive: 0xa855f7, emissiveIntensity: 3, transparent: true, opacity: 0.85, roughness: 0.05, metalness: 0.1 });
    const matSpark   = new THREE.MeshStandardMaterial({ color: 0xfde68a, emissive: 0xf59e0b, emissiveIntensity: 8, roughness: 0, metalness: 0, transparent: true, opacity: 1 });
    const matPart    = new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x2563eb, emissiveIntensity: 2.5, roughness: 0.1, metalness: 0.4 });
    const matSurface = new THREE.MeshStandardMaterial({ color: 0x0d0b16, metalness: 0.85, roughness: 0.55 });
    const matGrid    = new THREE.MeshStandardMaterial({ color: 0x4c1d95, emissive: 0x4c1d95, emissiveIntensity: 0.7, transparent: true, opacity: 0.5 });

    // ── ROOT GROUP ───────────────────────────────────────────────────────────
    const root = new THREE.Group();
    scene.add(root);

    // ── WORK SURFACE ─────────────────────────────────────────────────────────
    // Platform sits at y = -2.0; arms mount at y = -2.0 (on top of platform)
    const PLATFORM_Y = -2.0;
    const platform = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.10, 2.4), matSurface);
    platform.position.set(0, PLATFORM_Y, 0.2);
    platform.receiveShadow = true;
    root.add(platform);

    // Edge glow strips
    const edgeF = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.03, 0.025), matGrid);
    edgeF.position.set(0, PLATFORM_Y + 0.055, 1.40); root.add(edgeF);
    const edgeB = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.03, 0.025), matGrid);
    edgeB.position.set(0, PLATFORM_Y + 0.055, -1.0); root.add(edgeB);

    // Grid lines
    for (let i = -2; i <= 2; i++) {
      const vl = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.025, 2.4), matGrid);
      vl.position.set(i * 1.2, PLATFORM_Y + 0.055, 0.2); root.add(vl);
    }
    for (let i = -2; i <= 2; i++) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(6.0, 0.025, 0.014), matGrid);
      hl.position.set(0, PLATFORM_Y + 0.055, i * 0.5); root.add(hl);
    }

    // ── ARM BUILDER ───────────────────────────────────────────────────────────
    // Each arm mounts ON TOP of the platform. y origin = PLATFORM_Y + 0.05
    function buildArm(cx: number, glowMat: THREE.MeshStandardMaterial) {
      const group = new THREE.Group();
      group.position.set(cx, PLATFORM_Y + 0.05, 0);

      // Mount block
      const mount = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.36, 0.30), matDark);
      mount.position.y = 0.18;
      mount.castShadow = true;
      group.add(mount);
      const mgStripe = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.045, 0.32), glowMat);
      mgStripe.position.y = 0.32;
      group.add(mgStripe);

      // Shoulder (pivot at top of mount block)
      const shoulder = new THREE.Group();
      shoulder.position.y = 0.42;
      const shBall = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 14), matJoint);
      shBall.castShadow = true;
      shoulder.add(shBall);
      const shRing = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.032, 8, 28), matChrome);
      shRing.rotation.x = Math.PI / 2;
      shoulder.add(shRing);
      const shGlow = new THREE.Mesh(new THREE.SphereGeometry(0.058, 10, 8), glowMat);
      shGlow.position.z = 0.20;
      shoulder.add(shGlow);
      group.add(shoulder);

      // Upper arm (child of shoulder so it inherits shoulder position)
      const upper = new THREE.Group();
      // pivot at shoulder center → upper arm hangs down
      const uBody = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 1.05, 16, 3), matMid);
      uBody.position.y = -0.525;
      uBody.castShadow = true;
      upper.add(uBody);
      const uPanel = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.86, 0.095), matLight);
      uPanel.position.set(0.11, -0.525, 0.11);
      upper.add(uPanel);
      const uStripe = new THREE.Mesh(new THREE.BoxGeometry(0.020, 0.78, 0.034), glowMat);
      uStripe.position.set(0.14, -0.525, 0.06);
      upper.add(uStripe);
      shoulder.add(upper);

      // Elbow
      const elbow = new THREE.Group();
      elbow.position.y = -1.10; // bottom of upper arm
      const eBall = new THREE.Mesh(new THREE.SphereGeometry(0.165, 18, 12), matJoint);
      eBall.castShadow = true;
      elbow.add(eBall);
      const eRing = new THREE.Mesh(new THREE.TorusGeometry(0.185, 0.026, 8, 24), matChrome);
      eRing.rotation.y = Math.PI / 2;
      elbow.add(eRing);
      const eGlow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), glowMat);
      eGlow.position.z = 0.17;
      elbow.add(eGlow);
      upper.add(elbow);

      // Forearm
      const forearm = new THREE.Group();
      const fBody = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.120, 0.94, 16, 3), matDark);
      fBody.position.y = -0.47;
      fBody.castShadow = true;
      forearm.add(fBody);
      const fPanel = new THREE.Mesh(new THREE.BoxGeometry(0.175, 0.76, 0.08), matMid);
      fPanel.position.set(0.09, -0.47, 0.10);
      forearm.add(fPanel);
      const fStripe = new THREE.Mesh(new THREE.BoxGeometry(0.017, 0.68, 0.030), glowMat);
      fStripe.position.set(0.105, -0.47, 0.05);
      forearm.add(fStripe);
      elbow.add(forearm);

      // Wrist
      const wrist = new THREE.Group();
      wrist.position.y = -0.97;
      const wBall = new THREE.Mesh(new THREE.SphereGeometry(0.112, 14, 10), matJoint);
      wrist.add(wBall);
      const wRing = new THREE.Mesh(new THREE.TorusGeometry(0.126, 0.020, 8, 20), matChrome);
      wRing.rotation.x = Math.PI / 2;
      wrist.add(wRing);
      forearm.add(wrist);

      // Hand / end-effector
      const hand = new THREE.Group();
      hand.position.y = -0.97; // at wrist center
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.11, 0.30), matMid);
      palm.castShadow = true;
      hand.add(palm);
      // 3 fingers
      const fingers: THREE.Group[] = [];
      for (let f = 0; f < 3; f++) {
        const fg = new THREE.Group();
        fg.position.set((f - 1) * 0.075, -0.045, -0.18);
        const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.095, 0.14), matDark);
        p1.position.y = -0.048; fg.add(p1);
        const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.046, 0.085, 0.115), matMid);
        p2.position.y = -0.142; fg.add(p2);
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 6), glowMat);
        tip.position.y = -0.205; fg.add(tip);
        hand.add(fg);
        fingers.push(fg);
      }
      // Thumb
      const thumb = new THREE.Group();
      thumb.position.set(0.135, -0.022, -0.09);
      thumb.rotation.z = -0.5;
      const tBody = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.105, 0.10), matDark);
      tBody.position.y = -0.042; thumb.add(tBody);
      const tTip = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), glowMat);
      tTip.position.y = -0.105; thumb.add(tTip);
      hand.add(thumb);
      forearm.add(hand);

      root.add(group);
      return { group, shoulder, upper, elbow, forearm, hand, fingers };
    }

    // ── BUILD 3 ARMS ─────────────────────────────────────────────────────────
    const armA = buildArm(-2.10, matGlowV);  // left  — INSPECT
    const armB = buildArm( 0.00, matGlowB);  // center— WELD
    const armC = buildArm( 2.10, matGlowG);  // right — PLACE

    // ── ARM A: HELD CRYSTAL ───────────────────────────────────────────────────
    const crystalGroup = new THREE.Group();
    // Position below the palm so it hangs in the fingers
    crystalGroup.position.set(0, -0.28, -0.05);
    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), matCrystal);
    crystalGroup.add(crystal);
    const crystalCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.11, 0), matGlowV);
    crystalGroup.add(crystalCore);
    const orbitRing = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.013, 6, 40), matGlowV);
    crystalGroup.add(orbitRing);
    const orbitRing2 = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.011, 6, 40), matGlowV);
    orbitRing2.rotation.x = Math.PI / 2;
    crystalGroup.add(orbitRing2);
    armA.hand.add(crystalGroup);

    // ── ARM B: WELD NOZZLE + SPARKS ───────────────────────────────────────────
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.052, 0.30, 10), matChrome);
    nozzle.position.set(0, -0.24, -0.05);
    armB.hand.add(nozzle);
    const nozzleTip = new THREE.Mesh(new THREE.SphereGeometry(0.030, 10, 8), matSpark);
    nozzleTip.position.set(0, -0.40, -0.05);
    armB.hand.add(nozzleTip);

    const sparkParent = new THREE.Group();
    sparkParent.position.set(0, -0.40, -0.05);
    armB.hand.add(sparkParent);

    const sparks: { mesh: THREE.Mesh; vx: number; vy: number; vz: number; life: number; maxLife: number }[] = [];
    for (let i = 0; i < 20; i++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.015, 4, 4), matSpark.clone());
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.1;
      sparks.push({
        mesh: s,
        vx: Math.cos(angle) * speed,
        vy: (Math.random() - 0.25) * speed,
        vz: Math.sin(angle) * speed,
        life: Math.random(),
        maxLife: 0.35 + Math.random() * 0.45,
      });
      sparkParent.add(s);
    }

    // Workpiece on surface
    const workpiece = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.13, 0.38), matMid);
    workpiece.position.set(0, PLATFORM_Y + 0.115, 0.55);
    root.add(workpiece);
    const weldSeam = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.018, 0.018), matSpark);
    weldSeam.position.set(0, PLATFORM_Y + 0.185, 0.55);
    root.add(weldSeam);

    // ── ARM C: COMPONENT + SLOT ───────────────────────────────────────────────
    const component = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.11, 0.15), matPart);
    component.position.set(0, -0.26, -0.06);
    armC.hand.add(component);
    const compCore = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.065, 0.065), matGlowG);
    compCore.position.set(0, -0.26, -0.06);
    armC.hand.add(compCore);

    const slotMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 1.5, transparent: true, opacity: 0.4 });
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.028, 0.20), slotMat);
    slot.position.set(2.10, PLATFORM_Y + 0.07, 0.60);
    root.add(slot);

    // ── LIGHTING ─────────────────────────────────────────────────────────────
    const keyLight = new THREE.DirectionalLight(0xa0b8ff, 3.0);
    keyLight.position.set(-4, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7722cc, 2.2);
    rimLight.position.set(4, 3, -6);
    scene.add(rimLight);

    scene.add(new THREE.AmbientLight(0x08051a, 3.0));

    const lA = new THREE.PointLight(0xa855f7, 3.5, 5.0);
    lA.position.set(-2.10, 1.5, 1.5); scene.add(lA);

    const lB = new THREE.PointLight(0xf59e0b, 4.5, 4.0);
    lB.position.set(0, 1.5, 1.5); scene.add(lB);

    const lC = new THREE.PointLight(0x10b981, 3.5, 5.0);
    lC.position.set(2.10, 1.5, 1.5); scene.add(lC);

    const fillB = new THREE.PointLight(0x7c3aed, 1.8, 8);
    fillB.position.set(0, -1.5, 2.5); scene.add(fillB);

    // ── CURSOR TRACKING ───────────────────────────────────────────────────────
    let rawX = 0, rawY = 0, smoothX = 0, smoothY = 0;
    const LERP = 4.0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      rawX = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      rawY = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    };
    const onLeave = () => { rawX = 0; rawY = 0; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(el);

    // ── ANIMATE ──────────────────────────────────────────────────────────────
    let rafId: number;
    let last = performance.now(), t = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now; t += dt;

      const alpha = 1 - Math.exp(-LERP * dt);
      smoothX += (rawX - smoothX) * alpha;
      smoothY += (rawY - smoothY) * alpha;

      root.rotation.y =  smoothX * 0.14;
      root.rotation.x = -smoothY * 0.07;

      // ── ARM A: INSPECT — slow sweep, crystal held up and rotating ──────────
      armA.upper.rotation.x   = -0.60 + Math.sin(t * 0.50) * 0.25;
      armA.upper.rotation.z   =  Math.sin(t * 0.35) * 0.10;
      armA.elbow.rotation.x   =  0.80 + Math.sin(t * 0.50 + 0.9) * 0.20;
      armA.forearm.rotation.z =  Math.sin(t * 0.40) * 0.09;
      armA.hand.rotation.x    = -0.25 + Math.sin(t * 0.58) * 0.14;
      armA.hand.rotation.z    =  Math.sin(t * 0.46) * 0.16;

      crystal.rotation.y      += 0.018;
      crystal.rotation.x      += 0.009;
      crystalCore.rotation.y  -= 0.028;
      orbitRing.rotation.z    += 0.022;
      orbitRing2.rotation.x   += 0.018;
      const cp = 0.5 + 0.5 * Math.sin(t * 2.5);
      matCrystal.emissiveIntensity = 2.0 + 2.0 * cp;
      matGlowV.emissiveIntensity   = 4.0 + 2.5 * cp;
      lA.intensity = 2.5 + 2.0 * cp;

      // ── ARM B: WELD — circular motion, sparks, flicker ────────────────────
      const wCX = Math.sin(t * 2.8) * 0.18;
      const wCZ = Math.cos(t * 2.8) * 0.10;
      armB.upper.rotation.x   = -0.70 + wCX * 0.35;
      armB.upper.rotation.z   =  wCX * 0.25;
      armB.elbow.rotation.x   =  1.15 + wCZ * 0.18;
      armB.forearm.rotation.z =  wCX * 0.18;
      armB.hand.rotation.x    = -0.50 + wCX * 0.12;
      armB.hand.rotation.z    =  wCX * 0.10;

      for (const sp of sparks) {
        sp.life += dt;
        if (sp.life > sp.maxLife) {
          sp.life = 0;
          sp.mesh.position.set(0, 0, 0);
          const a2 = Math.random() * Math.PI * 2;
          const spd = 0.5 + Math.random() * 1.1;
          sp.vx = Math.cos(a2) * spd;
          sp.vy = (Math.random() - 0.2) * spd;
          sp.vz = Math.sin(a2) * spd;
        } else {
          sp.mesh.position.x += sp.vx * dt;
          sp.mesh.position.y += sp.vy * dt;
          sp.mesh.position.z += sp.vz * dt;
          sp.vy -= 2.8 * dt;
          const mat = sp.mesh.material as THREE.MeshStandardMaterial;
          const p = sp.life / sp.maxLife;
          mat.opacity = 1.0 - p;
          mat.emissiveIntensity = 8 * (1 - p);
        }
      }
      const wf = Math.random();
      lB.intensity = 3.5 + 5.5 * wf;
      matSpark.emissiveIntensity = 6 + 6 * wf;
      nozzleTip.scale.setScalar(0.8 + wf * 0.6);
      weldSeam.scale.x = 0.2 + (1 - Math.abs(wCX) / 0.18) * 0.8;

      // ── ARM C: PLACE — pick-up arc cycle ──────────────────────────────────
      const cycle = (t * 0.40) % (Math.PI * 2);
      const phase = Math.sin(cycle);
      const lift  = Math.max(0, Math.sin(cycle));

      armC.upper.rotation.x   = -0.45 - lift * 0.55;
      armC.upper.rotation.z   =  phase * 0.18;
      armC.elbow.rotation.x   =  0.70 + lift * 0.50;
      armC.forearm.rotation.z =  phase * 0.14;
      armC.hand.rotation.x    = -0.28 - lift * 0.32;
      armC.hand.rotation.z    =  phase * 0.11;

      const nearSlot = lift < 0.15 ? 1 : 0;
      matGlowG.emissiveIntensity = 4.5 + 2.5 * nearSlot;
      lC.intensity = 2.5 + 2.5 * nearSlot;
      slotMat.opacity = 0.2 + 0.6 * (1 - lift);
      slotMat.emissiveIntensity = 1.0 + 4.0 * (1 - lift);

      // ── GLOBAL BREATHE ────────────────────────────────────────────────────
      matGlowB.emissiveIntensity = 4.0 + 1.5 * Math.sin(t * 1.8);
      fillB.intensity = 1.2 + 0.7 * Math.sin(t * 0.9);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: 520 }}
    />
  );
}
