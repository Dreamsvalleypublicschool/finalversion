import React, { useRef, useEffect, ReactNode, CSSProperties, ElementType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AnimatedContent.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimatedContentProps {
  children?: ReactNode;
  container?: string | HTMLElement | Window;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  blur?: number;
  rotate?: number;
  tilt?: number;
  wipe?: 'none' | 'up' | 'down' | 'left' | 'right' | 'center';
  threshold?: number;
  delay?: number;
  stagger?: number;
  staggerFrom?: 'start' | 'end' | 'center' | 'edges' | 'random';
  trigger?: 'scroll' | 'mount';
  once?: boolean;
  onComplete?: () => void;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  blur = 0,
  rotate = 0,
  tilt = 0,
  wipe = 'none',
  threshold = 0.1,
  delay = 0,
  stagger = 0,
  staggerFrom = 'start',
  trigger = 'scroll',
  once = true,
  onComplete,
  className = '',
  style = {},
  as: Component = 'div'
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Accessibility check: respect reduced motion preferences
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = stagger > 0 && el.children.length > 0 
        ? Array.from(el.children) 
        : el;

      // Compute starting transform offsets
      let xOffset = 0;
      let yOffset = 0;

      if (direction === 'vertical') {
        yOffset = reverse ? -distance : distance;
      } else {
        xOffset = reverse ? -distance : distance;
      }

      // Compute tilt angles
      let tiltX = 0;
      let tiltY = 0;
      if (tilt !== 0) {
        if (direction === 'vertical') {
          tiltX = reverse ? -tilt : tilt;
        } else {
          tiltY = reverse ? tilt : -tilt;
        }
      }

      // Compute clip-path for wipe effects
      let startClipPath: string | undefined = undefined;
      const endClipPath = 'inset(0% 0% 0% 0%)';

      switch (wipe) {
        case 'up':
          startClipPath = 'inset(100% 0% 0% 0%)';
          break;
        case 'down':
          startClipPath = 'inset(0% 0% 100% 0%)';
          break;
        case 'left':
          startClipPath = 'inset(0% 0% 0% 100%)';
          break;
        case 'right':
          startClipPath = 'inset(0% 100% 0% 0%)';
          break;
        case 'center':
          startClipPath = 'inset(50% 50% 50% 50%)';
          break;
        default:
          startClipPath = undefined;
          break;
      }

      // Initial state definition
      const fromVars: gsap.TweenVars = {
        x: xOffset,
        y: yOffset,
        rotation: rotate,
        rotationX: tiltX,
        rotationY: tiltY,
        scale: scale,
        opacity: animateOpacity ? initialOpacity : 1,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
      };

      if (startClipPath) {
        fromVars.clipPath = startClipPath;
      }

      // Final target state
      const toVars: gsap.TweenVars = {
        x: 0,
        y: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        opacity: 1,
        filter: blur > 0 ? 'blur(0px)' : 'none',
        duration: duration,
        ease: ease,
        delay: delay,
        onComplete: onComplete,
        clearProps: 'filter'
      };

      if (startClipPath) {
        toVars.clipPath = endClipPath;
      }

      if (stagger > 0) {
        toVars.stagger = {
          each: stagger,
          from: staggerFrom as gsap.StaggerVars['from']
        };
      }

      if (trigger === 'mount') {
        gsap.fromTo(targets, fromVars, toVars);
      } else {
        // Scroll-triggered animation
        toVars.scrollTrigger = {
          trigger: el,
          scroller: typeof container === 'string' 
            ? container 
            : container instanceof HTMLElement 
              ? container 
              : undefined,
          start: `top ${Math.round((1 - threshold) * 100)}%`,
          once: once,
          toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        };

        gsap.fromTo(targets, fromVars, toVars);
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    blur,
    rotate,
    tilt,
    wipe,
    threshold,
    delay,
    stagger,
    staggerFrom,
    trigger,
    once
  ]);

  const classes = [
    'animated-content',
    tilt !== 0 ? 'animated-content--tilt' : '',
    className
  ].filter(Boolean).join(' ');

  const Tag = Component as any;

  return (
    <Tag ref={containerRef} className={classes} style={style}>
      {children}
    </Tag>
  );
};

export default AnimatedContent;
