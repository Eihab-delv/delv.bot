"use client";

import { IRIS_OPEN_EVENT } from "./IrisChat";

/** A button that opens the IRIS chat panel. */
export default function OpenIrisButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(IRIS_OPEN_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}
