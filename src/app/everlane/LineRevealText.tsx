


// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(SplitText, ScrollTrigger);

// interface TextRevealProps {
//   text: string;
//   className?: string;      
//   duration?: number;       
//   stagger?: number;        
//   type?: "words" | "chars" | "lines"; 
// }

// export default function TextReveal({
//   text,
//   className,
//   duration = 2,
//   stagger = 0.1,
//   type = "words",
// }: TextRevealProps) {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     document.fonts.ready.then(() => {
//       const split = SplitText.create(containerRef.current, { type, aria: "hidden" });
//       gsap.set(split[type], { opacity: 0, y: 20 }); // start slightly below

//       gsap.to(split[type], {
//         opacity: 1,
//         y: 0,
//         duration,
//         ease: "power3.out",
//         stagger,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 85%",
//           toggleActions: "play none none none",
//         },
//       });

//       return () => split.revert();
//     });
//   }, [duration, stagger, type]);

//   return (
//     <div
//       ref={containerRef}
//       className={className ?? ""}
//       style={{ width: "100%" }}
//     >
//       <p style={{ margin: 0 }}>{text}</p>
//     </div>
//   );
// }



"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextRevealProps {
  text: string; // now can contain HTML
  className?: string;
  duration?: number;
  stagger?: number;
  type?: "words" | "chars" | "lines";
}

export default function TextReveal({
  text,
  className,
  duration = 2,
  stagger = 0.1,
  type = "words",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    document.fonts.ready.then(() => {
      const split = SplitText.create(containerRef.current, { type, aria: "hidden" });

      gsap.set(split[type], { opacity: 0, y: 20 });

      gsap.to(split[type], {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      return () => split.revert();
    });
  }, [duration, stagger, type]);

  return (
    <div ref={containerRef} className={className ?? ""} style={{ width: "100%" }}>
      <p style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
