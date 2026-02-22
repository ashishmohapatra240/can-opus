export default function MapSection() {
  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.2360195258825!2d85.82813937501275!3d20.373156281117218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091c84229a9f%3A0xfb040a70bef0acb5!2sCanOpus%20Engineering%20Services!5e0!3m2!1sen!2sin!4v1755959273168!5m2!1sen!2sin';

  return (
    <section className="w-full" aria-label="Office location map">
      <div className="w-full h-64 sm:h-80 lg:h-96">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CanOpus Engineering Services Location"
          className="w-full h-full block"
        />
      </div>
    </section>
  );
}
