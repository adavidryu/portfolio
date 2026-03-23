interface ContentAreaProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentArea({ children, className = "" }: ContentAreaProps) {
  return (
    <div className={`pt-24 md:pt-28 lg:pt-0 lg:ml-72 flex-1 min-h-screen relative z-10 ${className}`}>
      <div className="px-4 pb-12 pt-6 sm:px-6 lg:px-12 lg:py-12 relative">
        <div className="mx-auto w-full max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  );
}
