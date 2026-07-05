import { useEffect, useState } from "react";

export function useRoleCycler(roles: string[], intervalMs = 2400) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleVisible(false);
      window.setTimeout(() => {
        setRoleIdx((index) => (index + 1) % roles.length);
        setRoleVisible(true);
      }, 320);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, roles.length]);

  return { roleIdx, roleVisible };
}
