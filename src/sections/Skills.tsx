import {
  TrendingUp,
  Target,
  Smartphone,
  Filter,
  FileText,
  BarChart3,
  Users,
  Bot,
} from 'lucide-react';

const skillCategories = [
  {
    icon: TrendingUp,
    title: 'استراتيجيات نمو العلامة التجارية',
    chips: ['ولاء العملاء', 'زيادة التحويل', 'الوعي بالعلامة التجارية', 'رحلة العميل'],
    color: 'bg-blue-50 text-blue-600',
    isCore: true,
  },
  {
    icon: Target,
    title: 'التسويق بالأداء والنتائج',
    chips: ['إعلانات سناب شات', 'إعلانات جوجل', 'إعلانات تيك توك', 'إعلانات ميتا'],
    color: 'bg-purple-50 text-purple-600',
    isCore: true,
  },
  {
    icon: Smartphone,
    title: 'تسويق تطبيقات الجوال',
    chips: ['زيادة التحميلات', 'تحسين متجر التطبيقات ASO', 'الاحتفاظ بالمستخدمين', 'الاستحواذ على العملاء'],
    color: 'bg-emerald-50 text-emerald-600',
    isCore: true,
  },
  {
    icon: Filter,
    title: 'تحسين قمع المبيعات',
    chips: ['معدل التحويل CRO', 'صفحات الهبوط', 'استراتيجيات العروض', 'اختبارات A/B Testing'],
    color: 'bg-amber-50 text-amber-600',
    isCore: true,
  },
  {
    icon: FileText,
    title: 'أنظمة صناعة المحتوى',
    chips: ['محتوى المستخدم UGC', 'إدارة الإنتاج الإبداعي', 'التقويم المحتوي', 'الفيديوهات القصيرة'],
    color: 'bg-rose-50 text-rose-600',
    isCore: true,
  },
  {
    icon: BarChart3,
    title: 'التحليل والتقارير الرقمية',
    chips: ['تحليل البيانات', 'استخراج الرؤى', 'مؤشرات الأداء KPIs', 'لوحات البيانات'],
    color: 'bg-cyan-50 text-cyan-600',
    isCore: true,
  },
  {
    icon: Users,
    title: 'إدارة الفرق والعمليات',
    chips: ['شراء المساحات الإعلانية', 'إدارة فرق المحتوى', 'إدارة فرق التصميم', 'إدارة الإنتاج'],
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Bot,
    title: 'أدوات الذكاء الاصطناعي والأتمتة',
    chips: ['أتمتة العمليات (n8n/Zapier)', 'توليد الصور بالذكاء الاصطناعي', 'ChatGPT', 'هندسة الأوامر Prompting'],
    color: 'bg-violet-50 text-violet-600',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            المهارات الأساسية
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            مجموعة متكاملة من المهارات التقنية والاستراتيجية في مجال التسويق الرقمي
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}
              >
                <category.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex-1">
                  {category.title}
                </h3>
                {category.isCore && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    أساسية
                  </span>
                )}
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {category.chips.map((chip, chipIndex) => (
                  <span
                    key={chipIndex}
                    className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
