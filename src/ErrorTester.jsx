import { useState } from "react";

export default function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("there is an error somewhere in the app");
  }
  return (
    <div>
      <h3 className="err">Error Boundary here</h3>
      <button className="link-error" onClick={() => setHasError(prev => !prev)}>ErrorBoundary test</button>
    </div>
  );
}


