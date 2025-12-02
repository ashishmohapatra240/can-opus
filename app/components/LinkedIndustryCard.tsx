import Link from 'next/link';
import IndustryCard from './IndustryCard';

interface LinkedIndustryCardProps {
  image: string;
  title: string;
  description: string;
  slug: string;
}

export default function LinkedIndustryCard({ image, title, description, slug }: LinkedIndustryCardProps) {
  return (
    <Link href={`/industries/${slug}`} className="block group">
      <IndustryCard
        image={image}
        title={title}
        description={description}
      />
    </Link>
  );
}
