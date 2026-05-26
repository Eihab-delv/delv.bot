"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RobotSilhouette({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth || 800;
    const H = el.clientHeight || 480;

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
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, W / H, 0.1, 100);
    camera.position.set(9, 4.8, 6.5);
    camera.lookAt(5, 3, 3);

    // ── MATERIALS ────────────────────────────────────────────────────────────
    const matDark = new THREE.MeshStandardMaterial({ color: 0x14121e, metalness: 0.95, roughness: 0.22 });
    const matMid = new THREE.MeshStandardMaterial({ color: 0x1e1b2e, metalness: 0.92, roughness: 0.26 });
    const matLight = new THREE.MeshStandardMaterial({ color: 0x2a2640, metalness: 0.90, roughness: 0.18 });
    const matChrome = new THREE.MeshStandardMaterial({ color: 0x5a5888, metalness: 0.99, roughness: 0.05 });
    const matJoint = new THREE.MeshStandardMaterial({ color: 0x0a0912, metalness: 0.96, roughness: 0.40 });
    const matSurface = new THREE.MeshStandardMaterial({ color: 0x0d0b16, metalness: 0.85, roughness: 0.55 });
    const matGrid = new THREE.MeshStandardMaterial({ color: 0x4c1d95, emissive: 0x4c1d95, emissiveIntensity: 0.7, transparent: true, opacity: 0.5 });

    // Per-arm glow colours — separate instances so intensity mutations don't bleed
    const matGlowV = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0xa855f7, emissiveIntensity: 5, roughness: 0, metalness: 0 });
    const matGlowB = new THREE.MeshStandardMaterial({ color: 0x93c5fd, emissive: 0x3b82f6, emissiveIntensity: 5, roughness: 0, metalness: 0 });
    const matGlowG = new THREE.MeshStandardMaterial({ color: 0x6ee7b7, emissive: 0x10b981, emissiveIntensity: 5, roughness: 0, metalness: 0 });

    // Shared travelling object materials — morph colour across phases
    const matObj = new THREE.MeshStandardMaterial({ color: 0xe9d5ff, emissive: 0xa855f7, emissiveIntensity: 3, transparent: true, opacity: 0.9, roughness: 0.05, metalness: 0.15 });
    const matObjCore = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0xa855f7, emissiveIntensity: 6, roughness: 0, metalness: 0 });
    const matObjRing = new THREE.MeshStandardMaterial({ color: 0xc084fc, emissive: 0xa855f7, emissiveIntensity: 4, roughness: 0, metalness: 0 });

    const matSpark = new THREE.MeshStandardMaterial({ color: 0xfde68a, emissive: 0xf59e0b, emissiveIntensity: 8, roughness: 0, metalness: 0, transparent: true, opacity: 1 });

    const slotMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x10b981, emissiveIntensity: 1.5, transparent: true, opacity: 0.4 });

    // ── ROOT GROUP ───────────────────────────────────────────────────────────
    const root = new THREE.Group();
    scene.add(root);

    // ── WORK SURFACE ─────────────────────────────────────────────────────────
    const PLATFORM_Y = 0.0;
    const platform = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.12, 3.2), matSurface);
    platform.position.set(0, PLATFORM_Y - 0.06, 0.2);
    platform.receiveShadow = true;
    root.add(platform);

    // Edge glow strips
    [1.80, -1.40].forEach(z => {
      const e = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.03, 0.025), matGrid);
      e.position.set(0, PLATFORM_Y + 0.01, z); root.add(e);
    });
    for (let i = -3; i <= 3; i++) {
      const vl = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.025, 3.2), matGrid);
      vl.position.set(i * 1.1, PLATFORM_Y + 0.01, 0.2); root.add(vl);
    }
    for (let i = -2; i <= 2; i++) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.025, 0.014), matGrid);
      hl.position.set(0, PLATFORM_Y + 0.01, i * 0.6); root.add(hl);
    }

    // ── ARM BUILDER ───────────────────────────────────────────────────────────
    function buildArm(cx: number, glowMat: THREE.MeshStandardMaterial) {
      const group = new THREE.Group();
      group.position.set(cx, PLATFORM_Y, 0.0);

      // Mount block
      const mount = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.40, 0.30), matDark);
      mount.position.y = 0.20; mount.castShadow = true; group.add(mount);
      const mgStripe = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.045, 0.32), glowMat);
      mgStripe.position.y = 0.38; group.add(mgStripe);

      // Shoulder
      const shoulder = new THREE.Group();
      shoulder.position.y = 0.46;
      shoulder.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 14), matJoint), { castShadow: true }));
      const shRing = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.032, 8, 28), matChrome);
      shRing.rotation.x = Math.PI / 2; shoulder.add(shRing);
      const shGlow = new THREE.Mesh(new THREE.SphereGeometry(0.058, 10, 8), glowMat);
      shGlow.position.z = 0.22; shoulder.add(shGlow);
      group.add(shoulder);

      // Upper arm (points upward, rotation.x tilts it forward)
      const upper = new THREE.Group();
      const uBody = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 1.05, 16, 3), matMid);
      uBody.position.y = 0.525; uBody.castShadow = true; upper.add(uBody);
      const uPanel = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.86, 0.095), matLight);
      uPanel.position.set(0.11, 0.525, 0.11); upper.add(uPanel);
      const uStripe = new THREE.Mesh(new THREE.BoxGeometry(0.020, 0.78, 0.034), glowMat);
      uStripe.position.set(0.14, 0.525, 0.06); upper.add(uStripe);
      shoulder.add(upper);

      // Elbow
      const elbow = new THREE.Group();
      elbow.position.y = 1.10;
      elbow.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.165, 18, 12), matJoint), { castShadow: true }));
      const eRing = new THREE.Mesh(new THREE.TorusGeometry(0.185, 0.026, 8, 24), matChrome);
      eRing.rotation.y = Math.PI / 2; elbow.add(eRing);
      const eGlow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), glowMat);
      eGlow.position.z = 0.17; elbow.add(eGlow);
      upper.add(elbow);

      // Forearm
      const forearm = new THREE.Group();
      const fBody = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.120, 0.94, 16, 3), matDark);
      fBody.position.y = 0.47; fBody.castShadow = true; forearm.add(fBody);
      const fPanel = new THREE.Mesh(new THREE.BoxGeometry(0.175, 0.76, 0.08), matMid);
      fPanel.position.set(0.09, 0.47, 0.10); forearm.add(fPanel);
      const fStripe = new THREE.Mesh(new THREE.BoxGeometry(0.017, 0.68, 0.030), glowMat);
      fStripe.position.set(0.105, 0.47, 0.05); forearm.add(fStripe);
      elbow.add(forearm);

      // Wrist
      const wrist = new THREE.Group();
      wrist.position.y = 0.97;
      wrist.add(new THREE.Mesh(new THREE.SphereGeometry(0.112, 14, 10), matJoint));
      const wRing = new THREE.Mesh(new THREE.TorusGeometry(0.126, 0.020, 8, 20), matChrome);
      wRing.rotation.x = Math.PI / 2; wrist.add(wRing);
      forearm.add(wrist);

      // Hand (under wrist)
      const hand = new THREE.Group();
      hand.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.11, 0.30), matMid), { castShadow: true }));
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
      }
      const thumb = new THREE.Group();
      thumb.position.set(0.135, -0.022, -0.09);
      thumb.rotation.z = -0.5;
      const tBody = new THREE.Mesh(new THREE.BoxGeometry(0.044, 0.105, 0.10), matDark);
      tBody.position.y = -0.042; thumb.add(tBody);
      const tTip = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), glowMat);
      tTip.position.y = -0.105; thumb.add(tTip);
      hand.add(thumb);
      wrist.add(hand);

      root.add(group);
      return { group, shoulder, upper, elbow, forearm, wrist, hand };
    }

    // ── BUILD 3 ARMS ─────────────────────────────────────────────────────────
    const ARM_X = { A: -2.20, B: 0.00, C: 2.20 };
    const armA = buildArm(ARM_X.A, matGlowV);
    const armB = buildArm(ARM_X.B, matGlowB);
    const armC = buildArm(ARM_X.C, matGlowG);

    // ── TRAVELLING OBJECT ────────────────────────────────────────────────────
    // A single object group that lives in world space and gets repositioned
    // each frame to follow whichever arm's hand currently "holds" it.
    // Phase A → crystal octahedron  (purple inspect glow)
    // Phase B → glowing data slab   (amber processed glow)
    // Phase C → circuit component   (green placed glow)
    //
    // We achieve the morph by lerping colour/emissive and swapping geometry
    // visibility between sub-meshes.

    const objGroup = new THREE.Group();
    scene.add(objGroup); // world-space so we can move it freely

    // Sub-mesh A: octahedron crystal (shown during INSPECT phase)
    const objA_outer = new THREE.Mesh(new THREE.OctahedronGeometry(0.22, 0), matObj);
    const objA_core = new THREE.Mesh(new THREE.OctahedronGeometry(0.10, 0), matObjCore);
    const objA_ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.012, 6, 40), matObjRing);
    const objA_ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.010, 6, 40), matObjRing);
    objA_ring2.rotation.x = Math.PI / 2;
    objGroup.add(objA_outer, objA_core, objA_ring1, objA_ring2);

    // Sub-mesh B: data slab (shown during PROCESS phase)
    const objB_slab = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.07, 0.22), matObj);
    const objB_core = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.10), matObjCore);
    const objB_ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.014, 6, 36), matObjRing);
    objB_ring.rotation.x = Math.PI / 2;
    objGroup.add(objB_slab, objB_core, objB_ring);

    // Sub-mesh C: circuit component (shown during PLACE phase)
    const objC_body = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.09, 0.15), matObj);
    const objC_core = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.05, 0.07), matObjCore);
    // small pin array
    for (let pi = 0; pi < 4; pi++) {
      const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.06, 5), matChrome);
      pin.position.set(-0.07 + pi * 0.045, -0.065, 0);
      objGroup.add(pin);
    }
    objGroup.add(objC_body, objC_core);

    // All hidden to start — visibility toggled per phase
    [objA_outer, objA_core, objA_ring1, objA_ring2,
      objB_slab, objB_core, objB_ring,
      objC_body, objC_core].forEach(m => { m.visible = false; });

    // Destination slot on the platform (right side, front)
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.018, 0.20), slotMat);
    slot.position.set(ARM_X.C, PLATFORM_Y + 0.02, 1.15);
    root.add(slot);

    // Weld spark system (active only during PROCESS phase, world-space)
    const sparkParent = new THREE.Group();
    scene.add(sparkParent);
    const sparks: { mesh: THREE.Mesh; vx: number; vy: number; vz: number; life: number; maxLife: number }[] = [];
    for (let i = 0; i < 22; i++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.013, 4, 4), matSpark.clone());
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.6 + Math.random() * 1.2;
      sparks.push({
        mesh: s,
        vx: Math.cos(angle) * speed,
        vy: (Math.random() - 0.2) * speed,
        vz: Math.sin(angle) * speed,
        life: Math.random(),
        maxLife: 0.3 + Math.random() * 0.4,
      });
      sparkParent.add(s);
    }
    sparkParent.visible = false;

    // ── LIGHTING ─────────────────────────────────────────────────────────────
    const keyLight = new THREE.DirectionalLight(0xa0b8ff, 3.0);
    keyLight.position.set(-4, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);
    scene.add(new THREE.DirectionalLight(0x7722cc, 2.2).position.set(4, 3, -6) && new THREE.DirectionalLight(0x7722cc, 2.2));
    scene.add(new THREE.AmbientLight(0x08051a, 3.0));

    const rimLight = new THREE.DirectionalLight(0x7722cc, 2.2);
    rimLight.position.set(4, 3, -6);
    scene.add(rimLight);

    const lA = new THREE.PointLight(0xa855f7, 3.5, 6.0);
    lA.position.set(ARM_X.A, 2.5, 1.5); scene.add(lA);
    const lB = new THREE.PointLight(0xf59e0b, 4.5, 5.0);
    lB.position.set(ARM_X.B, 2.5, 1.5); scene.add(lB);
    const lC = new THREE.PointLight(0x10b981, 3.5, 6.0);
    lC.position.set(ARM_X.C, 2.5, 1.5); scene.add(lC);
    const fillB = new THREE.PointLight(0x7c3aed, 1.8, 10);
    fillB.position.set(0, 0.5, 3.0); scene.add(fillB);

    // Travelling object light — follows the object
    const objLight = new THREE.PointLight(0xa855f7, 4.0, 3.5);
    scene.add(objLight);

    // ── CURSOR TRACKING ───────────────────────────────────────────────────────
    let rawX = 0, rawY = 0, smoothX = 0, smoothY = 0;
    const LERP = 4.0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      rawX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      rawY = ((e.clientY - r.top) / r.height - 0.5) * 2;
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

    // ── PIPELINE CYCLE ───────────────────────────────────────────────────────
    // Total cycle = PHASE_DUR * 3 seconds.
    // [0 .. PHASE_DUR)         = INSPECT (Arm A holds & scans the object)
    // [PHASE_DUR .. 2*PHASE_DUR) = PROCESS (Arm B holds & processes it)
    // [2*PHASE_DUR .. 3*PHASE_DUR) = PLACE  (Arm C carries & slots it)
    const PHASE_DUR = 4.0; // seconds per phase
    const TOTAL = PHASE_DUR * 3;
    const HANDOFF = 0.35; // fraction of phase used for transit arc between arms

    // Helper: smooth step
    const ss = (x: number) => x * x * (3 - 2 * x);

    // ── SMOOTH ROTATION LERP HELPER ──────────────────────────────────────────
    // Instead of snapping joints to target angles each frame, we lerp them.
    // This is the key to fluid, "hydraulic" motion.
    const joints = {
      aUpperX: 1.05, aUpperZ: 0, aElbowX: -0.65, aForeZ: 0, aWristX: -0.18, aHandZ: 0,
      bUpperX: 1.15, bUpperZ: 0, bElbowX: -0.80, bForeZ: 0, bWristX: -0.35, bHandZ: 0,
      cUpperX: 1.00, cUpperZ: 0, cElbowX: -0.55, cForeZ: 0, cWristX: -0.20, cHandZ: 0,
    };
    // Smoothing factor — higher = snappier, lower = more fluid
    const JOINT_SMOOTH = 5.0;

    // ── ANIMATE ──────────────────────────────────────────────────────────────
    let rafId: number;
    let last = performance.now(), t = 0;

    // Reusable vec3s
    const _v3 = new THREE.Vector3();

    // Get world position of a hand group
    function handWorldPos(arm: ReturnType<typeof buildArm>, out: THREE.Vector3) {
      arm.hand.getWorldPosition(out);
    }

    const posA = new THREE.Vector3();
    const posB = new THREE.Vector3();
    const posC = new THREE.Vector3();
    // Slot world position
    const slotPos = new THREE.Vector3(ARM_X.C, PLATFORM_Y + 0.12, 1.15);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now; t += dt;

      const alpha = 1 - Math.exp(-LERP * dt);
      smoothX += (rawX - smoothX) * alpha;
      smoothY += (rawY - smoothY) * alpha;
      root.rotation.y = smoothX * 0.14;
      root.rotation.x = -smoothY * 0.07;

      // Current phase (0=INSPECT, 1=PROCESS, 2=PLACE)
      const cycleT = t % TOTAL;
      const phase = Math.floor(cycleT / PHASE_DUR); // 0, 1, 2
      const phaseT = (cycleT % PHASE_DUR) / PHASE_DUR; // 0..1 within phase

      // Handoff window: last HANDOFF fraction of each phase is the transit
      const inHandoff = phaseT > (1 - HANDOFF);
      const handoffProg = inHandoff ? (phaseT - (1 - HANDOFF)) / HANDOFF : 0; // 0..1

      // Joint smoothing factor
      const js = 1 - Math.exp(-JOINT_SMOOTH * dt);

      // ── ARM A: INSPECT — slow gentle scan ────────────────────────────────
      const aSway = Math.sin(t * 0.45) * 0.10; // slow sway
      let tAUpperX = 1.05 + aSway * 0.35;
      let tAUpperZ = Math.sin(t * 0.28) * 0.07;
      let tAElbowX = -0.65 + Math.sin(t * 0.38 + 0.8) * 0.10;
      let tAForeZ = Math.sin(t * 0.32) * 0.06;
      let tAWristX = -0.18 + Math.sin(t * 0.42) * 0.08;
      let tAHandZ = Math.sin(t * 0.36) * 0.10;
      // Extend toward arm B when handing off
      if (phase === 0 && inHandoff) {
        const ext = ss(handoffProg);
        tAUpperZ += ext * 0.32;
        tAElbowX += ext * 0.22;
        tAWristX += ext * 0.15;
      }
      joints.aUpperX += (tAUpperX - joints.aUpperX) * js;
      joints.aUpperZ += (tAUpperZ - joints.aUpperZ) * js;
      joints.aElbowX += (tAElbowX - joints.aElbowX) * js;
      joints.aForeZ += (tAForeZ - joints.aForeZ) * js;
      joints.aWristX += (tAWristX - joints.aWristX) * js;
      joints.aHandZ += (tAHandZ - joints.aHandZ) * js;
      armA.upper.rotation.x = joints.aUpperX;
      armA.upper.rotation.z = joints.aUpperZ;
      armA.elbow.rotation.x = joints.aElbowX;
      armA.forearm.rotation.z = joints.aForeZ;
      armA.wrist.rotation.x = joints.aWristX;
      armA.hand.rotation.z = joints.aHandZ;

      // ── ARM B: PROCESS ────────────────────────────────────────────────────
      const bWeld = phase === 1 && !inHandoff;
      // Weld motion: slow smooth circular pattern (not jittery)
      const wCX = bWeld ? Math.sin(t * 1.6) * 0.12 : 0;
      const wCZ = bWeld ? Math.cos(t * 1.6) * 0.07 : 0;
      const bReachLeft = phase === 0 && inHandoff ? ss(handoffProg) : 0;
      const bReachRight = phase === 1 && inHandoff ? ss(handoffProg) : 0;

      const tBUpperX = 1.15 + wCX * 0.14 - bReachLeft * 0.10 + bReachRight * 0.10;
      const tBUpperZ = wCX * 0.14 - bReachLeft * 0.26 + bReachRight * 0.26;
      const tBElbowX = -0.80 + wCZ * 0.10;
      const tBForeZ = wCX * 0.10;
      const tBWristX = -0.35 + wCX * 0.07;
      const tBHandZ = wCX * 0.06;
      joints.bUpperX += (tBUpperX - joints.bUpperX) * js;
      joints.bUpperZ += (tBUpperZ - joints.bUpperZ) * js;
      joints.bElbowX += (tBElbowX - joints.bElbowX) * js;
      joints.bForeZ += (tBForeZ - joints.bForeZ) * js;
      joints.bWristX += (tBWristX - joints.bWristX) * js;
      joints.bHandZ += (tBHandZ - joints.bHandZ) * js;
      armB.upper.rotation.x = joints.bUpperX;
      armB.upper.rotation.z = joints.bUpperZ;
      armB.elbow.rotation.x = joints.bElbowX;
      armB.forearm.rotation.z = joints.bForeZ;
      armB.wrist.rotation.x = joints.bWristX;
      armB.hand.rotation.z = joints.bHandZ;

      // ── ARM C: PLACE ──────────────────────────────────────────────────────
      const cReachLeft = phase === 1 && inHandoff ? ss(handoffProg) : 0;
      const cLift = phase === 2 ? Math.max(0, Math.sin(phaseT * Math.PI)) : 0;
      const tCUpperX = 1.00 + cLift * 0.28 - cReachLeft * 0.10;
      const tCUpperZ = -cReachLeft * 0.24 + Math.sin(t * 0.25) * 0.05;
      const tCElbowX = -0.55 - cLift * 0.32;
      const tCForeZ = Math.sin(t * 0.28) * 0.06;
      const tCWristX = -0.20 - cLift * 0.20;
      const tCHandZ = Math.sin(t * 0.33) * 0.06;
      joints.cUpperX += (tCUpperX - joints.cUpperX) * js;
      joints.cUpperZ += (tCUpperZ - joints.cUpperZ) * js;
      joints.cElbowX += (tCElbowX - joints.cElbowX) * js;
      joints.cForeZ += (tCForeZ - joints.cForeZ) * js;
      joints.cWristX += (tCWristX - joints.cWristX) * js;
      joints.cHandZ += (tCHandZ - joints.cHandZ) * js;
      armC.upper.rotation.x = joints.cUpperX;
      armC.upper.rotation.z = joints.cUpperZ;
      armC.elbow.rotation.x = joints.cElbowX;
      armC.forearm.rotation.z = joints.cForeZ;
      armC.wrist.rotation.x = joints.cWristX;
      armC.hand.rotation.z = joints.cHandZ;

      // ── OBJECT GEOMETRY & COLOUR ──────────────────────────────────────────
      // Phase colours:
      // 0=purple inspect, 1=amber process, 2=green place
      const phaseColors = [
        { obj: 0xa855f7, core: 0xa855f7, ring: 0xa855f7, light: 0xa855f7, lInt: 4.0 },
        { obj: 0xf59e0b, core: 0xf59e0b, ring: 0xf59e0b, light: 0xf59e0b, lInt: 5.5 },
        { obj: 0x10b981, core: 0x10b981, ring: 0x10b981, light: 0x10b981, lInt: 4.0 },
      ];
      const pc = phaseColors[phase];
      matObj.emissive.setHex(pc.obj);
      matObjCore.emissive.setHex(pc.core);
      matObjRing.emissive.setHex(pc.ring);
      objLight.color.setHex(pc.light);

      // Toggle which sub-mesh is visible
      const showA = phase === 0;
      const showB = phase === 1;
      const showC = phase === 2;
      objA_outer.visible = objA_core.visible = objA_ring1.visible = objA_ring2.visible = showA;
      objB_slab.visible = objB_core.visible = objB_ring.visible = showB;
      objC_body.visible = objC_core.visible = showC;

      // ── OBJECT WORLD POSITION ─────────────────────────────────────────────
      // Object follows the active arm's hand; during handoff it arcs between them
      handWorldPos(armA, posA);
      handWorldPos(armB, posB);
      handWorldPos(armC, posC);

      // Raise the object slightly above palm center
      const HOLD_OFFSET = new THREE.Vector3(0, 0.18, -0.22);
      // Transform offset from hand-local to world:
      const handOffsetA = HOLD_OFFSET.clone().applyQuaternion(armA.hand.getWorldQuaternion(new THREE.Quaternion()));
      const handOffsetB = HOLD_OFFSET.clone().applyQuaternion(armB.hand.getWorldQuaternion(new THREE.Quaternion()));
      const handOffsetC = HOLD_OFFSET.clone().applyQuaternion(armC.hand.getWorldQuaternion(new THREE.Quaternion()));

      posA.add(handOffsetA);
      posB.add(handOffsetB);
      posC.add(handOffsetC);

      let objPos: THREE.Vector3;
      if (phase === 0 && !inHandoff) {
        objPos = posA;
      } else if (phase === 0 && inHandoff) {
        // Arc from A to B
        const hp = ss(handoffProg);
        _v3.lerpVectors(posA, posB, hp);
        _v3.y += Math.sin(handoffProg * Math.PI) * 0.5; // arc up
        objPos = _v3;
      } else if (phase === 1 && !inHandoff) {
        objPos = posB;
      } else if (phase === 1 && inHandoff) {
        // Arc from B to C
        const hp = ss(handoffProg);
        _v3.lerpVectors(posB, posC, hp);
        _v3.y += Math.sin(handoffProg * Math.PI) * 0.5;
        objPos = _v3;
      } else {
        // Phase 2: carry then lower into slot
        const dropProg = ss(Math.min(1, phaseT / 0.75)); // 0..1 over 75% of phase
        _v3.lerpVectors(posC, slotPos, dropProg);
        // Arc down: rise slightly then lower
        const arcY = Math.sin(dropProg * Math.PI) * 0.3 * (1 - dropProg);
        _v3.y += arcY;
        objPos = _v3;
      }

      // Smooth the object's world position so handoff arcs are fluid
      objGroup.position.lerp(objPos, 1 - Math.exp(-10 * dt));
      objLight.position.copy(objGroup.position);

      // Spin / animate the active geometry (gentle, not dizzy)
      objA_outer.rotation.y += 0.012 * dt * 60;
      objA_outer.rotation.x += 0.006 * dt * 60;
      objA_core.rotation.y -= 0.018 * dt * 60;
      objA_ring1.rotation.z += 0.015 * dt * 60;
      objA_ring2.rotation.x += 0.012 * dt * 60;
      objB_slab.rotation.y += 0.020 * dt * 60;
      objB_ring.rotation.y += 0.016 * dt * 60;
      objC_body.rotation.y += 0.008 * dt * 60;

      // Slow breathe pulse — not a flicker
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.4);
      matObj.emissiveIntensity = 2.0 + 1.8 * pulse;
      matObjCore.emissiveIntensity = 4.5 + 2.0 * pulse;
      matObjRing.emissiveIntensity = 2.5 + 1.5 * pulse;
      objLight.intensity = pc.lInt * (0.85 + 0.3 * pulse);

      // ── SPARKS (only during PROCESS / phase 1) ────────────────────────────
      sparkParent.visible = bWeld;
      if (bWeld) {
        sparkParent.position.copy(posB);
        // Smooth flicker — blend random with sine so it doesn't strobe
        const wf = 0.5 + 0.3 * Math.sin(t * 8.0) + 0.2 * Math.random();
        lB.intensity = 3.5 + 3.5 * wf;
        matSpark.emissiveIntensity = 6 + 4 * wf;
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
      } else {
        lB.intensity = 2.0;
      }

      // ── SLOT PULSE when object arrives ────────────────────────────────────
      if (phase === 2) {
        const dropProg = Math.min(1, phaseT / 0.75);
        slotMat.opacity = 0.25 + 0.55 * (1 - dropProg);
        slotMat.emissiveIntensity = 1.5 + 5.0 * (1 - dropProg);
      } else {
        slotMat.opacity = 0.3;
        slotMat.emissiveIntensity = 1.0;
      }

      // ── PER-ARM GLOW BREATHE (slow, smooth) ──────────────────────────────
      matGlowV.emissiveIntensity = phase === 0 ? 4.5 + 1.5 * pulse : 2.0;
      matGlowB.emissiveIntensity = phase === 1 ? 4.5 + 1.5 * pulse : 2.0;
      matGlowG.emissiveIntensity = phase === 2 ? 4.5 + 1.5 * pulse : 2.0;
      lA.intensity = phase === 0 ? 2.8 + 1.5 * pulse : 1.0;
      lC.intensity = phase === 2 ? 2.8 + 1.5 * pulse : 1.0;
      fillB.intensity = 1.0 + 0.5 * Math.sin(t * 0.7);

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
      style={{ width: "135%", height: "115%", minHeight: 620, transform: "scaleX(-1)" }}
    />
  );
}
