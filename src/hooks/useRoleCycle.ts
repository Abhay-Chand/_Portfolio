import { useEffect, useState } from 'react';

export function useRoleCycle(roles: string[]) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleVisible(false);
      window.setTimeout(() => {
        setRoleIndex((index) => (index + 1) % roles.length);
        setRoleVisible(true);
      }, 320);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [roles.length]);

  return { roleIndex, roleVisible, role: roles[roleIndex] };
}
