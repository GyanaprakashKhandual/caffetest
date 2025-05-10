import Image from 'next/image';

export default function ImageGallery() {
  const images = [
    { src: '/image/chris-ried-ieic5Tq8YMk-unsplash.jpg', width: 600, height: 400 },
    { src: '/image/joshua-sortino-LqKhnDzSF-8-unsplash.jpg', width: 600, height: 400 },
    { src: '/image/markus-spiske-Skf7HxARcoc-unsplash.jpg', width: 600, height: 400 },
    { src: '/image/nathan-dumlao-R_5bQWAf8p0-unsplash.jpg', width: 600, height: 400 },
    { src: '/image/sumup-XmgPX5-IT0k-unsplash.jpg', width: 600, height: 400 },
    { src: '/image/thisisengineering--GoKFTYnRoQ-unsplash.jpg', width: 600, height: 400 },
  ];

  return (
    <div className="relative w-full h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden w-full h-full">
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={image.width}
              height={image.height}
              layout="responsive"
              objectFit="cover"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
