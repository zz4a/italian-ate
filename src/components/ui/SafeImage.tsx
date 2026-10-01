'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function SafeImage({ src, alt, className, fill, width, height, priority }: SafeImageProps) {
  const [error, setError] = useState(false);
  const fallback = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80';

  if (fill) {
    return (
      <Image
        src={error ? fallback : src}
        alt={alt}
        fill
        priority={priority}
        onError={() => setError(true)}
        className={className}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      width={width || 600}
      height={height || 400}
      priority={priority}
      onError={() => setError(true)}
      className={className}
    />
  );
}
