'use client';

import React, { useEffect, useLayoutEffect, useRef, useState, ReactNode, CSSProperties } from 'react';
import './MagicBento.css';

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export interface MagicBentoItem {
  id?: string | number;
  title?: string;
  description?: string;
  label?: string;
  icon?: ReactNode;
  image?: string;
  visual?: ReactNode | string;
  content?: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  href?: string;
  target?: string;
  rel?: string;
  noPadding?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export interface MagicBentoProps {
  items: MagicBentoItem[];
  columns?: number;
  rowHeight?: number | string;
  gap?: number;
  radius?: number;
  theme?: 'dark' | 'light';
  glowColor?: string;
  textAutoHide?: boolean;
  enableBorderGlow?: boolean;
  enableSpotlight?: boolean;
  spotlightRadius?: number;
  enableStars?: boolean;
  particleCount?: number;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  intro?: boolean;
  disableAnimations?: boolean;
  onItemClick?: (item: MagicBentoItem, index: number) => void;
  className?: string;
  style?: CSSProperties;
}

const THEMES = {
  dark: {
    '--mb-surface': 'rgba(255, 255, 255, 0.08)',
    '--mb-edge': 'rgba(255, 255, 255, 0.18)',
    '--mb-highlight': 'rgba(255, 255, 255, 0.25)',
    '--mb-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.18)',
    '--mb-tile': 'rgba(255, 255, 255, 0.06)',
    '--mb-tile-edge': 'rgba(255, 255, 255, 0.15)',
    '--mb-tile-highlight': 'rgba(255, 255, 255, 0.2)',
    '--mb-tile-shadow': '0 4px 16px -2px rgba(0, 0, 0, 0.3)',
    '--mb-well': 'rgba(255, 255, 255, 0.05)',
    '--mb-well-edge': 'rgba(255, 255, 255, 0.1)',
    '--mb-ink': '#ffffff',
    '--mb-muted': 'rgba(255, 255, 255, 0.85)',
    '--mb-faint': 'rgba(255, 255, 255, 0.5)',
    '--mb-line': 'rgba(255, 255, 255, 0.15)',
    '--mb-secondary': '#F4511E',
    '--mb-secondary-ink': '#ffffff',
    '--mb-cursor-stroke': 'rgba(255, 255, 255, 0.9)',
    '--mb-ring': 'rgba(255, 255, 255, 0.85)',
    '--mb-focus': 'transparent',
    '--mb-glow-alpha': 0.85,
    '--mb-spot-alpha': 0.12
  },
  light: {
    '--mb-surface': 'rgba(255, 255, 255, 0.08)',
    '--mb-edge': 'rgba(255, 255, 255, 0.18)',
    '--mb-highlight': 'rgba(255, 255, 255, 0.25)',
    '--mb-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.18)',
    '--mb-tile': 'rgba(255, 255, 255, 0.06)',
    '--mb-tile-edge': 'rgba(255, 255, 255, 0.15)',
    '--mb-tile-highlight': 'rgba(255, 255, 255, 0.2)',
    '--mb-tile-shadow': '0 4px 16px -2px rgba(0, 0, 0, 0.3)',
    '--mb-well': 'rgba(255, 255, 255, 0.05)',
    '--mb-well-edge': 'rgba(255, 255, 255, 0.1)',
    '--mb-ink': '#ffffff',
    '--mb-muted': 'rgba(255, 255, 255, 0.85)',
    '--mb-faint': 'rgba(255, 255, 255, 0.5)',
    '--mb-line': 'rgba(255, 255, 255, 0.15)',
    '--mb-secondary': '#F4511E',
    '--mb-secondary-ink': '#ffffff',
    '--mb-cursor-stroke': 'rgba(255, 255, 255, 0.9)',
    '--mb-ring': 'rgba(255, 255, 255, 0.85)',
    '--mb-focus': 'transparent',
    '--mb-glow-alpha': 0.85,
    '--mb-spot-alpha': 0.12
  }
};

const INK = { dark: [244, 81, 30], light: [23, 43, 115] };
const MIN_CELL = 200;
const MIN_PAIR = 240;
const STAGGER = 60;
const TILT = 4;
const MAGNET = 4;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const parseRgb = (value?: string) => {
  if (!value) return null;
  const text = String(value).trim();
  const hex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(text);
  if (hex) {
    const full = hex[1].length === 3 ? hex[1].replace(/./g, digit => digit + digit) : hex[1];
    return [0, 2, 4].map(index => parseInt(full.slice(index, index + 2), 16));
  }
  const numbers = text.match(/[\d.]+/g);
  if (numbers && numbers.length >= 3 && /^(rgba?\(|[\d.\s,]+$)/i.test(text)) {
    return numbers.slice(0, 3).map(channel => clamp(Math.round(parseFloat(channel)), 0, 255));
  }
  return null;
};

const inkFor = (rgb: number[]) => {
  const [r, g, b] = rgb.map(channel => channel / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.55 ? '#172B73' : '#ffffff';
};

export default function MagicBento({
  items = [],
  columns = 4,
  rowHeight = 'auto',
  gap = 16,
  radius = 18,
  theme = 'light',
  glowColor = '#F4511E',
  textAutoHide = false,
  enableBorderGlow = true,
  enableSpotlight = true,
  spotlightRadius = 280,
  enableStars = false,
  particleCount = 20,
  enableTilt = true,
  enableMagnetism = false,
  clickEffect = true,
  intro = false,
  disableAnimations = false,
  onItemClick,
  className = '',
  style
}: MagicBentoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const starRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const engineRef = useRef<{ sync: () => void } | null>(null);
  const [cols, setCols] = useState(Math.max(1, Math.round(columns)));

  const palette = theme === 'dark' ? 'dark' : 'light';
  const glow = parseRgb(glowColor) ?? INK[palette];
  const settings = {
    items,
    columns: Math.max(1, Math.round(columns)),
    gap: Math.max(0, gap),
    enableBorderGlow,
    enableSpotlight,
    spotlightRadius: Math.max(40, spotlightRadius),
    enableStars,
    particleCount: clamp(Math.round(particleCount), 0, 120),
    enableTilt,
    enableMagnetism,
    clickEffect,
    intro,
    disableAnimations,
    onItemClick,
    glow
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const motion = !settingsRef.current.disableAnimations && !reduced;
    const playIntro = motion && settingsRef.current.intro;
    if (motion) root.dataset.motion = '';
    else delete root.dataset.motion;
    if (playIntro) root.dataset.intro = '';
    else delete root.dataset.intro;

    const pointer = { x: -1e5, y: -1e5, inside: false, down: -1 };
    const light = { x: -1e5, y: -1e5, near: 0, ready: false };
    const states: any[] = [];
    const wave = { x: 0, y: 0, t: -1, duration: 1.1, reach: 800 };
    let rects: (DOMRect | null)[] = [];
    let bounds: DOMRect | null = null;
    let dirty = true;
    let raf = 0;
    let last = 0;
    let visible = true;
    let entered = !playIntro;
    let settleTimer = 0;
    let introTimer = 0;

    const stateFor = (index: number) => {
      if (!states[index]) {
        states[index] = {
          hot: 0,
          rx: 0,
          ry: 0,
          tx: 0,
          ty: 0,
          vrx: 0,
          vry: 0,
          vtx: 0,
          vty: 0,
          press: 1,
          vpress: 0,
          stars: 0,
          particles: null,
          active: false,
          written: {}
        };
      }
      return states[index];
    };

    const write = (element: HTMLElement, state: any, name: string, value: string) => {
      if (state.written[name] === value) return;
      state.written[name] = value;
      element.style.setProperty(name, value);
    };

    const measure = () => {
      dirty = false;
      bounds = root.getBoundingClientRect();
      rects = cellRefs.current.map(cell => (cell ? cell.getBoundingClientRect() : null));
    };

    const startWave = (x: number, y: number, duration: number) => {
      if (!motion || !bounds) return;
      wave.x = x;
      wave.y = y;
      wave.t = 0;
      wave.duration = duration;
      wave.reach =
        Math.max(
          Math.hypot(x - bounds.left, y - bounds.top),
          Math.hypot(x - bounds.right, y - bounds.top),
          Math.hypot(x - bounds.left, y - bounds.bottom),
          Math.hypot(x - bounds.right, y - bounds.bottom)
        ) + 140;
    };

    const frame = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;
      if (dirty) measure();
      const s = settingsRef.current;
      const cards = cardRefs.current;
      let busy = false;

      const margin = s.spotlightRadius * 0.5;
      const near =
        pointer.inside &&
        bounds &&
        pointer.x > bounds.left - margin &&
        pointer.x < bounds.right + margin &&
        pointer.y > bounds.top - margin &&
        pointer.y < bounds.bottom + margin
          ? 1
          : 0;
      if (!light.ready && near) {
        light.x = pointer.x;
        light.y = pointer.y;
        light.ready = true;
      }
      const follow = 1 - Math.exp(-dt / 0.05);
      light.x += (pointer.x - light.x) * follow;
      light.y += (pointer.y - light.y) * follow;
      const fade = 1 - Math.exp(-dt / (near > light.near ? 0.12 : 0.4));
      light.near += (near - light.near) * fade;
      if (Math.abs(near - light.near) < 0.002) light.near = near;
      else busy = true;
      if (Math.abs(pointer.x - light.x) + Math.abs(pointer.y - light.y) > 0.3) busy = true;

      let waveRadius = 0;
      let waveAlpha = 0;
      if (wave.t >= 0) {
        wave.t += dt;
        const progress = Math.min(1, wave.t / wave.duration);
        waveRadius = wave.reach * (1 - Math.pow(1 - progress, 2.2));
        waveAlpha = Math.pow(1 - progress, 1.3);
        if (progress >= 1) {
          wave.t = -1;
          waveAlpha = 0;
        } else busy = true;
      }

      cards.forEach((card, index) => {
        const rect = rects[index];
        if (!card || !rect) return;
        const state = stateFor(index);
        const lx = light.x - rect.left;
        const ly = light.y - rect.top;
        const px = pointer.x - rect.left;
        const py = pointer.y - rect.top;
        const inside = pointer.inside && entered && px >= 0 && py >= 0 && px <= rect.width && py <= rect.height;

        if (inside !== state.active) {
          state.active = inside;
          if (inside) {
            card.dataset.active = '';
          } else delete card.dataset.active;
        }

        const hotTarget = inside && s.enableSpotlight ? 1 : 0;
        state.hot += (hotTarget - state.hot) * (1 - Math.exp(-dt / (hotTarget > state.hot ? 0.14 : 0.32)));
        if (Math.abs(hotTarget - state.hot) < 0.002) state.hot = hotTarget;
        else busy = true;

        const u = clamp(px / Math.max(1, rect.width), 0, 1) - 0.5;
        const v = clamp(py / Math.max(1, rect.height), 0, 1) - 0.5;
        const tilt = inside && s.enableTilt && motion;
        const magnet = inside && s.enableMagnetism && motion;
        const targets = [
          tilt ? -v * 2 * TILT : 0,
          tilt ? u * 2 * TILT : 0,
          magnet ? u * 2 * MAGNET : 0,
          magnet ? v * 2 * MAGNET : 0
        ];
        const keys = [
          ['rx', 'vrx'],
          ['ry', 'vry'],
          ['tx', 'vtx'],
          ['ty', 'vty']
        ];
        const steps = Math.max(1, Math.ceil(dt / (1 / 240)));
        const h = dt / steps;
        keys.forEach(([key, velocity], k) => {
          for (let step = 0; step < steps; step++) {
            state[velocity] += (170 * (targets[k] - state[key]) - 20 * state[velocity]) * h;
            state[key] += state[velocity] * h;
          }
          if (Math.abs(targets[k] - state[key]) < 0.002 && Math.abs(state[velocity]) < 0.01) {
            state[key] = targets[k];
            state[velocity] = 0;
          } else busy = true;
        });

        write(card, state, '--mb-x', `${lx.toFixed(1)}px`);
        write(card, state, '--mb-y', `${ly.toFixed(1)}px`);
        write(card, state, '--mb-near', (s.enableBorderGlow ? light.near : 0).toFixed(3));
        write(card, state, '--mb-hot', state.hot.toFixed(3));
        write(card, state, '--mb-rx', `${state.rx.toFixed(3)}deg`);
        write(card, state, '--mb-ry', `${state.ry.toFixed(3)}deg`);
        write(card, state, '--mb-tx', `${state.tx.toFixed(2)}px`);
        write(card, state, '--mb-ty', `${state.ty.toFixed(2)}px`);
        write(card, state, '--mb-wx', `${(wave.x - rect.left).toFixed(1)}px`);
        write(card, state, '--mb-wy', `${(wave.y - rect.top).toFixed(1)}px`);
        write(card, state, '--mb-wr', `${waveRadius.toFixed(1)}px`);
        write(card, state, '--mb-wa', waveAlpha.toFixed(3));
      });

      if (busy && visible) raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (raf || !visible) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const cardIndex = (target: any) => {
      if (!(target instanceof Element)) return -1;
      const card = target.closest('.magic-bento__card');
      return card instanceof HTMLElement ? cardRefs.current.indexOf(card) : -1;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.inside = true;
      wake();
    };

    const onPointerOut = (event: PointerEvent) => {
      if (event.relatedTarget) return;
      pointer.inside = false;
      pointer.down = -1;
      wake();
    };

    const onPointerDown = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.inside = true;
      pointer.down = cardIndex(event.target);
      wake();
    };

    const release = () => {
      if (pointer.down < 0) return;
      pointer.down = -1;
      wake();
    };

    const activate = (index: number, x: number, y: number) => {
      const s = settingsRef.current;
      const card = cardRefs.current[index];
      if (!card) return;
      if (s.clickEffect) {
        if (dirty) measure();
        startWave(x, y, 1.1);
      }
      wake();
    };

    const onClick = (event: MouseEvent) => {
      const index = cardIndex(event.target);
      const card = cardRefs.current[index];
      if (!card) return;
      if (event.detail === 0) {
        const rect = card.getBoundingClientRect();
        activate(index, rect.left + rect.width / 2, rect.top + rect.height / 2);
      } else activate(index, event.clientX, event.clientY);
    };

    const onScroll = () => {
      dirty = true;
      wake();
    };

    const resizeObserver = new ResizeObserver(() => {
      const s = settingsRef.current;
      const width = root.clientWidth;
      const cell = (count: number) => (width - s.gap * (count - 1)) / count;
      const next = cell(s.columns) >= MIN_CELL ? s.columns : s.columns >= 2 && cell(2) >= MIN_PAIR ? 2 : 1;
      setCols(next);
      dirty = true;
      wake();
    });
    resizeObserver.observe(root);

    const enter = () => {
      entered = true;
      let order = 0;
      cellRefs.current.forEach(cell => {
        if (!cell) return;
        cell.style.setProperty('--mb-delay', `${order++ * STAGGER}ms`);
        cell.dataset.state = 'in';
      });
      if (dirty) measure();
      introTimer = window.setTimeout(() => {
        if (bounds) startWave(bounds.left, bounds.top, 1.7);
        wake();
      }, 260);
      settleTimer = window.setTimeout(
        () => {
          cellRefs.current.forEach(cell => cell?.style.setProperty('--mb-delay', '0ms'));
        },
        order * STAGGER + 2600
      );
      wake();
    };

    let gate: IntersectionObserver | null = null;
    if (playIntro && typeof IntersectionObserver !== 'undefined') {
      gate = new IntersectionObserver(
        (entries, observer) => {
          if (!entries.some(entry => entry.isIntersecting)) return;
          observer.disconnect();
          enter();
        },
        { threshold: 0.15 }
      );
      gate.observe(root);
    } else {
      cellRefs.current.forEach(cell => {
        if (!cell) return;
        cell.style.setProperty('--mb-delay', '0ms');
        cell.dataset.state = 'in';
      });
    }

    const visibility = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        dirty = true;
        wake();
      }
    });
    visibility.observe(root);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', release, { passive: true });
    window.addEventListener('pointercancel', release, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onScroll, { passive: true });
    document.addEventListener('pointerout', onPointerOut as any);
    root.addEventListener('click', onClick);

    engineRef.current = {
      sync: () => {
        cellRefs.current.forEach(cell => {
          if (!cell || (!entered && playIntro)) return;
          if (cell.dataset.state !== 'in') {
            cell.style.setProperty('--mb-delay', '0ms');
            cell.dataset.state = 'in';
          }
        });
        dirty = true;
        wake();
      }
    };

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(settleTimer);
      window.clearTimeout(introTimer);
      gate?.disconnect();
      visibility.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('pointerout', onPointerOut as any);
      root.removeEventListener('click', onClick);
      engineRef.current = null;
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    engineRef.current?.sync();
  }, [items, cols, rowHeight, gap, radius, enableSpotlight, enableBorderGlow]);

  const ink = INK[palette];
  const accent = parseRgb(glowColor) ?? ink;
  const corner = Math.max(0, radius);
  const span = Math.max(1, cols);

  cellRefs.current.length = items.length;
  cardRefs.current.length = items.length;
  starRefs.current.length = items.length;

  return (
    <div
      ref={rootRef}
      className={`magic-bento ${className}`.trim()}
      data-autohide={textAutoHide ? '' : undefined}
      data-motion={disableAnimations ? undefined : ''}
      data-intro={intro && !disableAnimations ? '' : undefined}
      style={{
        ...((THEMES[palette] as any)),
        '--mb-glow-rgb': glow.join(', '),
        '--mb-accent-rgb': accent.join(', '),
        '--mb-accent-ink': inkFor(accent),
        '--mb-radius': `${corner}px`,
        '--mb-inner-radius': `${Math.round(clamp(corner * 0.5, 6, 12))}px`,
        '--mb-pad': `${Math.round(clamp(corner * 0.85, 14, 20))}px`,
        '--mb-spot-size': `${Math.max(40, spotlightRadius)}px`,
        '--mb-border-size': `${Math.round(Math.max(40, spotlightRadius) * 0.75)}px`,
        gridTemplateColumns: `repeat(${span}, minmax(0, 1fr))`,
        gridAutoRows: typeof rowHeight === 'number' ? (span === 1 ? `minmax(${rowHeight}px, auto)` : `${rowHeight}px`) : rowHeight,
        gap: `${Math.max(0, gap)}px`,
        ...style
      } as any}
    >
      {items.map((item, index) => {
        const entry = item ?? {};
        const clickable = Boolean(entry.href || entry.onClick || onItemClick);
        const handleClick = (event: React.MouseEvent) => {
          entry.onClick?.(event);
          onItemClick?.(entry, index);
        };
        const cardProps = {
          ref: (element: HTMLElement | null) => {
            cardRefs.current[index] = element;
          },
          className: 'magic-bento__card',
          'data-clickable': clickable ? '' : undefined,
          'data-image': entry.image ? '' : undefined,
          onClick: clickable ? handleClick : undefined
        };
        const body = (
          <>
            {entry.image && <img className="magic-bento__image" src={entry.image} alt={entry.title || entry.label || 'Campus feature'} width={600} height={400} loading="lazy" decoding="async" draggable={false} />}
            {entry.image && <span className="magic-bento__scrim" />}
            {enableSpotlight && <span className="magic-bento__light" />}
            <div className={`magic-bento__content ${entry.noPadding ? 'magic-bento__content--flush' : ''} ${entry.className || ''}`.trim()}>
              {entry.content ?? (
                <>
                  {(entry.icon || entry.label) && (
                    <div className="magic-bento__header">
                      {entry.icon && <span className="magic-bento__icon">{entry.icon}</span>}
                      {entry.label && <span className="magic-bento__label">{entry.label}</span>}
                    </div>
                  )}
                  {entry.visual && (
                    <div className="magic-bento__visual" aria-hidden="true">
                      {entry.visual}
                    </div>
                  )}
                  {(entry.title || entry.description) && (
                    <div className="magic-bento__text">
                      {entry.title && <h3 className="magic-bento__title">{entry.title}</h3>}
                      {entry.description && <p className="magic-bento__description">{entry.description}</p>}
                    </div>
                  )}
                </>
              )}
            </div>
            <span className="magic-bento__rim" />
            <span className="magic-bento__border" />
          </>
        );

        return (
          <div
            key={entry.id ?? index}
            ref={(element: HTMLDivElement | null) => {
              cellRefs.current[index] = element;
            }}
            className="magic-bento__cell"
            style={{
              gridColumn: `span ${Math.min(span, Math.max(1, Math.round(entry.colSpan ?? 1)))}`,
              gridRow: `span ${Math.max(1, Math.round(entry.rowSpan ?? 1))}`
            }}
          >
            {entry.href ? (
              <a {...cardProps} href={entry.href} target={entry.target} rel={entry.rel}>
                {body}
              </a>
            ) : (
              <div
                {...cardProps}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
                aria-label={clickable ? entry.title : undefined}
              >
                {body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export interface MagicBentoCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glowColor?: string;
  theme?: 'dark' | 'light';
  enableBorderGlow?: boolean;
  enableSpotlight?: boolean;
  enableTilt?: boolean;
  radius?: number;
  noPadding?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export function MagicBentoCard({
  children,
  className = '',
  style,
  glowColor = '#172B73',
  theme = 'light',
  enableBorderGlow = true,
  enableSpotlight = true,
  enableTilt = true,
  radius = 18,
  noPadding = false,
  onClick
}: MagicBentoCardProps) {
  return (
    <MagicBento
      items={[
        {
          content: children,
          noPadding,
          onClick
        }
      ]}
      columns={1}
      glowColor={glowColor}
      theme={theme}
      enableBorderGlow={enableBorderGlow}
      enableSpotlight={enableSpotlight}
      enableTilt={enableTilt}
      radius={radius}
      className={className}
      style={style}
    />
  );
}

export { MagicBento };
