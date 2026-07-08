"use client";

import * as React from "react";

const EASINGS = [
  { key: "expo", label: "Expo", value: "cubic-bezier(.16,1,.3,1)", use: "Entrances · hover-lift" },
  { key: "spring", label: "Spring", value: "cubic-bezier(.2,.9,.3,1.2)", use: "Toggle knob · press" },
] as const;

export function MotionLab() {
  const [run, setRun] = React.useState(false);

  const replay = () => {
    setRun(false);
    // next frame flip so the transition restarts
    requestAnimationFrame(() => requestAnimationFrame(() => setRun(true)));
  };

  return (
    <div className="mlab">
      <div className="mlab__lanes">
        {EASINGS.map((e) => (
          <div key={e.key} className="mlab__lane">
            <div className="mlab__lane-head">
              <span className="mlab__lane-name">{e.label}</span>
              <code className="mlab__lane-val">{e.value}</code>
            </div>
            <div className="mlab__track">
              <span
                className="mlab__dot"
                data-run={run || undefined}
                style={{ transitionTimingFunction: e.value }}
              />
            </div>
            <span className="mlab__lane-use">{e.use}</span>
          </div>
        ))}
      </div>
      <button type="button" className="mlab__replay" onClick={replay}>
        ▶ Replay easings
      </button>
    </div>
  );
}
