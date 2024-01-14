import { useEffect, useState } from "react";

/**
 * A hook to keep a boolean true for a specified amount of time
 * @param duration How long the hook should stay enabled in milliseconds
 */
const useTriggerTimeout = (duration: number): [() => void, boolean] => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const timeoutId = window.setTimeout(() => setEnabled(false), duration);

    return () => window.clearTimeout(timeoutId);
  }, [enabled, duration]);

  const triggerTimeout = () => setEnabled(true);

  return [triggerTimeout, enabled];
};

export { useTriggerTimeout };
