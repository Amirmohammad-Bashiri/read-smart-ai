import { cn } from "@/lib/utils";

type MaxWidthWrapper = {
  children: React.ReactNode;
  className?: string;
};

function MaxWidthWrapper({ children, className }: MaxWidthWrapper) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
