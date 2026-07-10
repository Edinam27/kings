import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost";

const base = "btn";
const variants: Record<Variant, string> = {
  primary: "btn--primary",
  ghost: "btn--ghost",
};

type ButtonAsLink = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

type ButtonAsButton = {
  href?: undefined;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const variant = props.variant ?? "primary";
  const className = `${base} ${variants[variant]} ${props.className ?? ""}`.trim();

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          className={className}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link className={className} href={props.href}>
        {props.children}
      </Link>
    );
  }

  const { type = "button", onClick, children } = props as ButtonAsButton;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
