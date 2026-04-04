"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

 gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text }: { text: string }) {
   
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
        const words = gsap.utils.toArray(".word");

            gsap.fromTo(
            words,
            { opacity: 0, y:30, filter: "blur(6px)", },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                     toggleActions: "play reverse play reverse",
                },
                
            }
            );
         },  textRef);           
        return () => ctx.revert();
        }, []);

  return (
    <h1 ref={textRef} className="text-4xl text-[#2E4F21] lg:text-7xl lg:text-start">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block  overflow-hidden">
          <span className="word inline-block">{word}&nbsp;</span>
        </span>
      ))}
    </h1>
  );
}
