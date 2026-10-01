"use client";

import RobotArm from "./RobotArm";

/** HeroRobot — the 3D robot arm scene behind the hero. */
export default function HeroRobot({ className = "" }: { className?: string }) {
  return <RobotArm className={className} />;
}
