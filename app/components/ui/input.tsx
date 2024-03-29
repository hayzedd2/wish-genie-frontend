import * as React from "react"

import { cn } from "@/lib/utils"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 text-white bg-[#1C1C25] placeholder:text-[#9E9EB8] w-full rounded-md outline-none border-2 border-[#3d3d54] px-5 py-3 text-[1.08rem] font-[500] ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
