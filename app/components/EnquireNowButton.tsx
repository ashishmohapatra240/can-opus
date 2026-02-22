'use client';

import { useEnquiryModal } from '../context/EnquiryModalContext';

type EnquireNowButtonProps = {
  className?: string;
  variant?: 'primary' | 'outline' | 'dark';
  subject?: string;
  children?: React.ReactNode;
};

const baseClasses =
  'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-colors duration-300 cursor-pointer';

export default function EnquireNowButton({
  className = '',
  variant = 'primary',
  subject,
  children,
}: EnquireNowButtonProps) {
  const { openEnquiryModal } = useEnquiryModal();

  const variantClasses = {
    primary:
      'bg-primary text-white hover:bg-primary/80',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    dark:
      'bg-black text-white hover:bg-gray-800',
  };

  return (
    <button
      type="button"
      onClick={() => openEnquiryModal(subject)}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children ?? 'Enquire Now'}
    </button>
  );
}
