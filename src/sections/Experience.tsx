import { Briefcase, MapPin, Calendar, Wrench } from 'lucide-react';

const experiences = [
  {
    title: 'Digital Marketing & Creative Director',
    company: 'مجموعة إمدادات العطاء',
    status: 'حاليا',
    date: 'يناير 2024 — حتى الآن',
    location: 'الرياض، المملكة العربية السعودية',
    bullets: [
      'قيادة قسم التسويق الرقمي والإبداعي لصناعة خطط نمو شاملة',
      'الإشراف على إطلاق الحملات لتطبيقات الجوال (Golden Ultra, BATAL)',
      'إدارة ميزانيات الإعلانات عبر: Meta, TikTok, Google, Snapchat',
      'بناء أنظمة داخلية لربط Creative Performance مع KPIs',
      'إدارة وتوجيه فرق متعددة (محتوى، تصميم، تصوير وانتاج المحتوى الاعلاني والسوشيال ميديا، إعلانات)',
      'الإشراف على جودة ظهور العلامة التجارية بشكل احترافي من مواقع إلكترونية ومطبوعات وهوية كاملة للشركة',
    ],
    tools: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Snapchat Ads', 'Adobe Suite', 'Figma', 'n8n'],
  },
  {
    title: 'Growth & Digital Marketing Consultant',
    company: 'مستقل',
    date: '2016 — 2023',
    location: 'المملكة العربية السعودية',
    bullets: [
      'تقديم استشارات وإدارة مشاريع تسويق رقمي لأكثر من 60 علامة تجارية',
      'بناء استراتيجيات علامة تجارية وهوية تسويقية',
      'كتابة وإخراج محتوى قصير يحقق مشاهدات عالية',
      'تطوير استراتيجيات عروض Funnels (وتحسين ROI)',
    ],
    tools: ['Meta Ads', 'Google Analytics', 'Shopify', 'WooCommerce', 'Adobe Premiere', 'ChatGPT'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            الخبرات المهنية
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            رحلة عمل تمتد لأكثر من 12 عامًا في مجال التسويق الرقمي
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-soft transition-shadow"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    {exp.status && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                        {exp.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 mb-6">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Key Tools */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    الأدوات الرئيسية
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
