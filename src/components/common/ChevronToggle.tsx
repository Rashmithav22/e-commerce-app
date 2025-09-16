// src/components/common/ChevronToggle.tsx
import { FC, ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
}

const ChevronToggle: FC<Props> = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b py-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full font-semibold"
      >
        {title}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default ChevronToggle;
