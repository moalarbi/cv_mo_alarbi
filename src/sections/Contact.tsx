import { Mail, Phone, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'dr.al3rbi@gmail.com',
    copyValue: 'dr.al3rbi@gmail.com',
    href: 'mailto:dr.al3rbi@gmail.com',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Phone,
    label: 'رقم الهاتف',
    value: '+966 53 731 1886',
    copyValue: '+966537311886',
    href: 'tel:+966537311886',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+966 53 731 1886',
    copyValue: '+966537311886',
    href: 'https://wa.me/966537311886',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moal3rbi',
    copyValue: 'https://linkedin.com/in/moal3rbi',
    href: 'https://linkedin.com/in/moal3rbi',
    color: 'bg-blue-50 text-blue-600',
  },
];

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('تم النسخ إلى الحافظة');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            تواصل معي
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            هل لديك مشروع أو فرصة عمل؟ أنا متاح للتواصل عبر القنوات التالية
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-card hover:shadow-soft transition-shadow group relative"
            >
              <a
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-6 h-6" />
                </div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="font-medium text-gray-900 text-sm">{info.value}</p>
              </a>
              
              {/* Copy Button */}
              {info.copyValue && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(info.copyValue, index);
                  }}
                  className="absolute top-4 left-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="نسخ"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Availability Box */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <h3 className="text-xl font-bold text-white">متاح للعمل</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            أنا حاليًا أبحث عن فرص جديدة في مجال التسويق الرقمي والنمو. إذا كنت
            تبحث عن شخص يمكنه قيادة استراتيجيات النمو لديك، فأنا هنا للمساعدة.
          </p>
        </div>
      </div>
    </section>
  );
}
