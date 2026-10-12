"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// three.js is ~140 KB (gzipped). Load it in its own chunk, only in the browser,
// and only once the page is idle — so text, images and buttons appear first.
const RobotArm = dynamic(() => import("./RobotArm"), { ssr: false });

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/** HeroRobot — the 3D robot arm scene behind the hero. */
export default function HeroRobot({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as IdleWindow;
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(id);
  }, []);

  // Same box either way, so nothing shifts when the robot appears.
  return ready ? <RobotArm className={className} /> : <div className={className} aria-hidden="true" />;
}
