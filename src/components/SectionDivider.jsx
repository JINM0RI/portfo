import { useEffect, useRef, useState } from "react";

export function SectionDivider({ className = "" }) {
  const dividerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = dividerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={dividerRef} className={`section-divider ${isActive ? "is-active" : ""} ${className}`.trim()} aria-hidden="true">
      <div className="section-divider-dots-track">
        <div className="section-divider-dots">
          {Array.from({ length: 7 }).map((_, index) => (
            <span key={index} className="section-divider-dot" />
          ))}
        </div>
      </div>
    </div>
  );
}
