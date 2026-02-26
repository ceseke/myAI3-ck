import { cn } from "@/lib/utils";

export function ChatHeaderBlock({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <div className={cn("gap-2 flex flex-1 items-center", className)}>
            {children}
        </div>
    )
}

export function ChatHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex py-4 px-5 bg-linear-to-b from-background via-background/90 to-transparent backdrop-blur-sm border-b border-border/30">
            {children}
        </div>
    )
}