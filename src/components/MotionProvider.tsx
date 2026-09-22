import { useReducedMotion as useMotionReducedMotion } from "motion/react";
import React, { type ReactNode, useEffect, useMemo, useState } from "react";

type MotionReactModule = typeof import("motion/react");

type MotionModule = {
  m?: MotionReactModule["m"];
  AnimatePresence?: MotionReactModule["AnimatePresence"];
  useReducedMotion?: MotionReactModule["useReducedMotion"];
  LazyMotion?: MotionReactModule["LazyMotion"];
  domAnimation?: MotionReactModule["domAnimation"];
};

const motionFallback: MotionModule = {
  m: undefined,
  AnimatePresence: undefined,
  useReducedMotion: undefined,
  LazyMotion: undefined,
  domAnimation: undefined,
};

const MotionContext = React.createContext<MotionModule & { loaded: boolean }>({
  ...motionFallback,
  loaded: false,
});

export function useMotion() {
  return React.useContext(MotionContext);
}

function stripMotionProps(props: Record<string, unknown>) {
  const out: Record<string, unknown> = {};
  const motionKeys = new Set([
    "initial",
    "animate",
    "exit",
    "variants",
    "transition",
    "whileInView",
    "viewport",
    "whileHover",
    "whileTap",
    "onViewportEnter",
  ]);
  for (const k of Object.keys(props)) {
    if (!motionKeys.has(k)) out[k] = props[k];
  }
  return out;
}

type AnimProps = {
  tag?: keyof HTMLElementTagNameMap | React.ElementType;
  children?: ReactNode;
  motionProps?: Record<string, unknown>;
} & Record<string, unknown>;

export function Anim({
  tag = "div",
  children,
  motionProps,
  ...props
}: AnimProps) {
  const ctx = useMotion();
  const tagName = typeof tag === "string" ? tag : "div";
  const MotionTag = ctx.m
    ? (ctx.m as unknown as Record<string, React.ElementType>)[tagName]
    : null;
  if (MotionTag)
    return (
      <MotionTag {...props} {...motionProps}>
        {children}
      </MotionTag>
    );
  return React.createElement(tagName, stripMotionProps(props), children);
}

type PresenceProps = {
  children?: ReactNode;
} & Record<string, unknown>;

export function Presence({ children, ...props }: PresenceProps) {
  const ctx = useMotion();
  const AP = ctx.AnimatePresence;
  if (AP) return <AP {...props}>{children}</AP>;
  return <>{children}</>;
}

export function useMotionReduced() {
  return useMotionReducedMotion();
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const [mod, setMod] = useState<MotionModule & { loaded: boolean }>({
    ...motionFallback,
    loaded: false,
  });

  useEffect(() => {
    let mounted = true;
    import("motion/react").then((motionReact) => {
      if (!mounted) return;
      const module: MotionModule = {
        m: motionReact.m,
        AnimatePresence: motionReact.AnimatePresence,
        useReducedMotion: motionReact.useReducedMotion,
        LazyMotion: motionReact.LazyMotion,
        domAnimation: motionReact.domAnimation,
      };
      setMod({ ...module, loaded: true });
    });
    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo(() => ({ ...mod }), [mod]);

  // If LazyMotion is available, wrap children to provide feature set for `m` elements.
  if (value.loaded && value.LazyMotion && value.domAnimation) {
    const LM = value.LazyMotion;
    const DA = value.domAnimation;
    return (
      <MotionContext.Provider value={value}>
        <LM features={DA}>{children}</LM>
      </MotionContext.Provider>
    );
  }

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
