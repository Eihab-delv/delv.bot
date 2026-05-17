"use client";

import RobotSilhouette from "./RobotSilhouette";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

/**
 * HeroRobot — renders the Three.js IRIS helmet.
 * The src / alt props are kept for API compatibility but unused.
 */
export default function HeroRobot({ className = "" }: Props) {
  return (
    <RobotSilhouette className={className} />
  );
}
