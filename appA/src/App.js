import React from "react";

const HelloFromB = React.lazy(() => import("appb/HelloFromB"));

export function ApplicationA() {
  return (
    <div>
      <h1>Application A</h1>
      <React.Suspense fallback="Loading remote content">
        <HelloFromB />
      </React.Suspense>
    </div>
  );
}
