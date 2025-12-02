'use client';

import Image from 'next/image';

export default function PhotoGallerySection() {

  const photos = [
    {
      src: '/images/events/e-1.jpg',
      alt: 'SakkSham Leadership Training Session 1',
      caption: 'Leadership Development Workshop'
    },
    {
      src: '/images/events/e-2.jpg',
      alt: 'SakkSham Leadership Training Session 2',
      caption: 'Team Building Activities'
    },
    {
      src: '/images/events/e-3.jpg',
      alt: 'SakkSham Leadership Training Session 3',
      caption: 'Interactive Learning Session'
    },
    {
      src: '/images/events/e-4.jpg',
      alt: 'SakkSham Leadership Training Session 4',
      caption: 'Group Collaboration Exercise'
    },
    {
      src: '/images/events/e-5.jpg',
      alt: 'SakkSham Leadership Training Session 5',
      caption: 'Leadership Skills Practice'
    },
    {
      src: '/images/events/e-6.jpg',
      alt: 'SakkSham Leadership Training Session 6',
      caption: 'Program Completion Ceremony'
    }
  ];




  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing moments from our SakkSham leadership program - where passion meets purpose
          </p>
          <div className="w-24 h-1 bg-primary/80 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-200 transition-all duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
