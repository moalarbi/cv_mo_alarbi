import { TrendingUp, Calendar, Building2, Target } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '70%',
    label: 'نمو العلامات التجارية',
    description: 'متوسط نمو العلامات التي عملت معها',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Target,
    value: '80%',
    label: 'نجاح الحملات الاعلانية',
    description: 'معدل نجاح وتحقيق الأهداف',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Calendar,
    value: '+12',
    label: 'سنة خبرة',
    description: 'في مجال التسويق الرقمي',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Building2,
    value: '+60',
    label: 'علامة تجارية',
    description: 'مشاريع منفذة بنجاح',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export default function Stats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
