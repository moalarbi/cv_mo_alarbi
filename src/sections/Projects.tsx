import { useState } from 'react';
import { Wrench, Target } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const projects = [
  {
    name: 'Golden Ultra',
    pill: 'تطبيق خدمة غسيل سيارات متنقل',
    pillColor: 'bg-amber-100 text-amber-700',
    description: 'تسويق تطبيق لخدمة غسيل السيارات المتنقلة وزيادة قاعدة المستخدمين',
    role: 'مدير التسويق الرقمي والإبداعي',
    achievements: [
      'نمو 70% في المتابعين خلال 6 أشهر',
      'تحسين الهوية البصرية على السيارات والدبابات',
      'زيادة العائد الإعلاني بشكل ملحوظ',
    ],
    tools: ['Meta Ads', 'TikTok', 'Google Ads', 'Adobe Suite', 'Figma'],
    modalContent: {
      problem: 'تطبيق جديد في سوق تنافسي يحتاج إلى بناء وعي بالعلامة التجارية وجذب مستخدمين جدد',
      actions: [
        'بناء استراتيجية محتوى متكاملة تركز على الفيديوهات القصيرة',
        'إدارة حملات إعلانية ممولة على Meta وTikTok وGoogle',
        'الإشراف على الهوية البصرية للسيارات والمطبوعات',
      ],
      outcome: 'نمو 70% في المتابعين خلال 6 أشهر، وتحسن ملحوظ في معدلات التحويل والعائد الإعلاني',
    },
  },
  {
    name: 'BATAL',
    pill: 'تطبيق صيانة ونظافة',
    pillColor: 'bg-blue-100 text-blue-700',
    description: 'تسويق تطبيق خدمات الصيانة والنظافة لجذب شرائح مختلفة من العملاء',
    role: 'مدير التسويق والنمو',
    achievements: [
      'زيادة عدد الحجوزات بشكل مستمر',
      'تحسين الحضور الرقمي الاحترافي',
      'رفع معدل ولاء العملاء',
    ],
    tools: ['Snapchat Ads', 'Meta Ads', 'Content Production', 'Branding'],
    modalContent: {
      problem: 'الحاجة إلى تمييز التطبيق في سوق الخدمات المنزلية وبناء ثقة العملاء',
      actions: [
        'التركيز على الإعلانات الممولة المستهدفة',
        'إنتاج محتوى احترافي يعكس جودة الخدمة',
        'توحيد الهوية البصرية (زي موحد، مطبوعات، حضور رقمي)',
      ],
      outcome: 'زيادة مستمرة في الحجوزات وتحسن ملحوظ في ولاء العملاء',
    },
  },
  {
    name: 'EMDADAT ALATTA',
    pill: 'نمو B2B',
    pillColor: 'bg-emerald-100 text-emerald-700',
    description: 'بناء محتوى احترافي لخدمات إدارة المرافق والتشغيل في قطاع B2B',
    role: 'مدير التسويق الرقمي والهوية البصرية',
    achievements: [
      'إطلاق حملات B2B ممولة ناجحة',
      'إنتاج محتوى احترافي لرفع الولاء',
      'المشاركة في المؤتمر الدولي لإدارة المرافق',
    ],
    tools: ['LinkedIn Ads', 'Video Production', 'Brand Identity', 'Event Marketing'],
    modalContent: {
      problem: 'شركة B2B تحتاج إلى تعزيز حضورها الرقمي واستدامة العملاء في قطاع إدارة المرافق',
      actions: [
        'الإشراف على إعلانات ممولة B2B مستهدفة',
        'تصوير محتوى احترافي يعكس احترافية الشركة',
        'الإشراف على الهوية البصرية الشاملة (مطبوعات، أزياء، حضور رقمي)',
      ],
      outcome: 'تحسن ملحوظ في استدامة العملاء ونجاح المشاركة في المؤتمر الدولي',
    },
  },
  {
    name: 'Shift X',
    pill: 'وكالة تسويق إلكتروني',
    pillColor: 'bg-purple-100 text-purple-700',
    description: 'تقديم خدمات التسويق الإلكتروني للمتاجر الإلكترونية',
    role: 'مؤسس ومدير الوكالة',
    achievements: [
      'زيادة عدد العملاء الجدد',
      'تحسين معدلات التحويل للمتاجر',
      'بناء هويات بصرية احترافية',
    ],
    tools: ['Shopify', 'WooCommerce', 'Salla', 'Zid', 'Magento', 'Adobe Suite'],
    modalContent: {
      problem: 'المتاجر الإلكترونية تحتاج إلى حلول تسويقية متكاملة من الهوية إلى التحويل',
      actions: [
        'تجهيز هويات بصرية احترافية للمتاجر',
        'إنشاء ومتابعة المتاجر على منصات متعددة (سلة، زد، شوبيفاي، ووكمرس، ماجنتو)',
        'إدارة حملات تسويقية وتحسين معدلات التحويل',
      ],
      outcome: 'زيادة ملحوظة في عدد العملاء الجدد وتحسين معدلات التحويل',
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            المشاريع البارزة
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            نبذة عن بعض المشاريع التي عملت عليها وحققت فيها نتائج ملموسة
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
            >
              {/* Pill */}
              <span
                className={`inline-block px-3 py-1.5 text-sm font-medium rounded-full mb-4 ${project.pillColor}`}
              >
                {project.pill}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">دورك:</span> {project.role}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    أبرز الإنجازات
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {project.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    التقنيات/الأدوات
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full mt-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors"
              >
                عرض التفاصيل
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                {selectedProject?.name}
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                {selectedProject?.description}
              </DialogDescription>
            </DialogHeader>

            {selectedProject && (
              <div className="space-y-6 mt-4">
                {/* Problem */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    التحدي
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.modalContent.problem}
                  </p>
                </div>

                {/* Actions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    ما قمت به
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.modalContent.actions.map((action, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    النتيجة
                  </h4>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.modalContent.outcome}
                    </p>
                  </div>
                </div>

                {/* Tools Used */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    الأدوات المستخدمة
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
