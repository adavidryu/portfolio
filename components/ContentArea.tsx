interface ContentAreaProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentArea({ children, className = "" }: ContentAreaProps) {
  return (
    <div className={`pt-20 lg:pt-0 lg:ml-60 flex-1 min-h-screen relative z-10 ${className}`}>
      <div className="p-6 lg:p-12 relative">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
