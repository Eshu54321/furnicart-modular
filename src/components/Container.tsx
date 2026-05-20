import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export default function Container({ children, className = "", clean = false, ...props }: ContainerProps) {
  if (clean) {
    return (
      <div className={`mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div className={`mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 w-full ${className}`} {...props}>
      {children}
    </div>
  );
}
