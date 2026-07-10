import { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function Section({
  children,
  surface = false,
  className = "",
}: {
  children: ReactNode;
  surface?: boolean;
  className?: string;
}) {
  return (
    <section className={`section ${surface ? "section--surface" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
