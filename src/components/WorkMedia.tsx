import Image from "next/image";

export default function WorkMedia({
  image,
  video,
  alt,
  className = "",
}: {
  image?: string;
  video?: string;
  alt: string;
  className?: string;
}) {
  if (video) {
    return (
      <video
        src={video}
        poster={image}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    );
  }

  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-foreground px-4 text-center font-heading text-sm text-background/35">
      {alt}
    </div>
  );
}
