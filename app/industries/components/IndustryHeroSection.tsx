import Image from 'next/image';
import EnquireNowButton from '../../components/EnquireNowButton';

interface IndustryHeroSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function IndustryHeroSection({ title, description, image }: IndustryHeroSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Industry Badge */}
            <div className="flex mb-6">
              <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                Industry
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6">
              {title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <EnquireNowButton
                className="inline-flex items-center justify-center px-6 py-2 rounded-full text-md font-semibold whitespace-nowrap"
                variant="primary"
              />
              <button className="inline-flex items-center justify-center px-6 py-2 rounded-full text-md font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer whitespace-nowrap">
                Download Industry Profile (PDF)
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
