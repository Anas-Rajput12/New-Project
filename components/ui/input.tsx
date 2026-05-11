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
          "flex h-11 w-full rounded-lg border border-white/10 bg-background-elevated px-4 py-2 text-sm font-medium text-foreground placeholder:text-muted-foreground transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 focus:bg-background",
          "hover:border-white/20 hover:bg-background",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "backdrop-blur-sm",
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
