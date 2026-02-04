import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Availability Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">متاح للعمل</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-3">
          محمد العربي
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-center text-gray-600 mb-4">
          Digital Marketing & Creative Director
        </p>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-center text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          قائد تسويق رقمي بخبرة +12 عام في بناء استراتيجيات نمو العلامات التجارية وتحقيق نتائج ملموسة في السوق السعودي
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => handleScroll('#contact')}
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-medium flex items-center gap-2 group"
          >
            تواصل معي
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => window.open('/cv_mo_alarbi/cv.pdf', '_blank')}
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-medium border-gray-300 hover:bg-gray-50 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            تحميل السيرة PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
