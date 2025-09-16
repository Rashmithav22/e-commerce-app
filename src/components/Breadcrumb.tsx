// src/components/Breadcrumb.tsx
import { FC } from "react";
import Link from "next/link";

interface Props {
  paths: { label: string; href?: string }[];
}

const Breadcrumb: FC<Props> = ({ paths }) => {
  return (
    <nav className="text-gray-500 text-sm ">
      {paths.map((p, idx) => (
        <span key={idx}>
          {p.href ? <Link href={p.href}>{p.label}</Link> : <span>{p.label}</span>}
          {idx < paths.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
