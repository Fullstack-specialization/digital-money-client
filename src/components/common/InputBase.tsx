// components/common/InputBase.tsx
import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils"

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputBase({ className, ...props }: InputBaseProps) {
  return (
    <input
      {...props}
      className={cn(
        "px-4 py-2 rounded-md text-black text-base md:text-md outline-none w-full h-[50px] md:h-[64px]",
        className
      )}
    />
  );
}
