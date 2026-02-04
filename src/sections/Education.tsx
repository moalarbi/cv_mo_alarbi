import { GraduationCap, Award, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const education = [
  {
    degree: 'ماجستير إدارة الأعمال (MBA)',
    institution: 'Midocean University',
    badge: 'قيد الدراسة',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    degree: 'بكالوريوس التسويق الرقمي',
    institution: 'Midocean University',
    years: '2022 — 2026',
    badge: 'قيد الدراسة',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    degree: 'ليسانس آداب قسم إعلام',
    institution: 'جامعة طنطا، مصر',
    years: '2015 — 2019',
  },
];

const professionalCerts = [
  { name: 'Meta Certified Digital Marketing Associate', issuer: 'Meta' },
  { name: 'Google Ads Search & Display Certification', issuer: 'Google' },
  { name: 'Content Strategy & SEO Specialization', issuer: 'Coursera' },
  { name: 'Advanced Social Media Strategy', issuer: 'LinkedIn Learning' },
];

const linkedInCerts = [
  { name: 'Business Development: Strategic Planning', date: 'Jul 2025' },
  { name: 'Unique Ways to Generate Creative Ideas', date: 'Jul 2025' },
  {
    name: 'Nano Tips for Creating an AI Prompt Library for Marketing Professionals with Ross Simmonds',
    date: 'Jul 2025',
  },
  { name: 'Creating a Culture of Collaboration', date: 'Jul 2025' },
  { name: 'Designing Growth Strategies', date: 'Jul 2025' },
  { name: 'Brand Strategy for Designers', date: 'Jul 2025' },
  { name: 'SEO: Optimize Your Social Media Profiles', date: 'Jul 2025' },
  {
    name: 'Running a Design Business: Leading a Creative Team',
    date: 'Jul 2025',
  },
  { name: 'Build Your Creative Capacity as a Leader', date: 'Jul 2025' },
  {
    name: 'Mastering Social Media Customer Care: Strategies from Million- and Billion-Dollar Brands',
    date: 'Jul 2025',
  },
  { name: 'Creating a Mood Board', date: 'Jul 2025' },
  { name: 'Digital Marketing Foundations', date: 'Jul 2025' },
  {
    name: 'Social Media Marketing Strategy: TikTok and Instagram Reels',
    date: 'Jul 2025',
  },
  { name: 'Strategic Social Media: Grow Your Business', date: 'Jul 2025' },
  { name: 'Learning Art Direction', date: 'Jul 2025' },
  { name: 'Social Media for Working Professionals', date: 'Jul 2025' },
  {
    name: 'Five Digital Marketing Strategies to Drive Conversions',
    date: 'Jul 2025',
  },
  { name: 'Growth Marketing Foundations', date: 'Aug 2025' },
  { name: 'Logo Design: Shapes and Symbols', date: 'Aug 2025' },
  { name: 'Storytelling for Designers', date: 'Jul 2025' },
  { name: 'Storytelling for Advertising Campaigns', date: 'Jul 2025' },
];

const pmpCert = {
  name: 'Professional Project Management "PMP"',
  issuer: 'Project Management Professional (PMP)®',
  date: 'Mar 2025',
  credentialId: 'UC-07f3853c-6116-4b0f-b6c2-aaf09c1505ca',
};

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            التعليم والشهادات
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            مؤهلاتي الأكاديمية والشهادات الاحترافية في مجال التسويق الرقمي
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="education">التعليم</TabsTrigger>
            <TabsTrigger value="certifications">الشهادات</TabsTrigger>
          </TabsList>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 mb-2">{edu.institution}</p>
                      {edu.badge && (
                        <span
                          className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${edu.badgeColor}`}
                        >
                          {edu.badge}
                        </span>
                      )}
                      {edu.years && (
                        <span className="text-sm text-gray-500">{edu.years}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            {/* Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-center">
              <p className="text-sm text-gray-700">
                الشهادات مرتبطة بتطبيقات عملية في المشاريع المذكورة.
              </p>
            </div>

            {/* Professional Certificates */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                الشهادات الاحترافية
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {professionalCerts.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-card hover:shadow-soft transition-shadow"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-600" />
                Licenses & Certifications
              </h3>
              <div className="bg-white rounded-2xl shadow-card overflow-hidden max-h-[600px] overflow-y-auto">
                <div className="grid grid-cols-1 divide-y divide-gray-100">
                  {linkedInCerts.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 sm:p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm sm:text-base leading-snug mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          LinkedIn — Issued {cert.date}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-shrink-0 rounded-full text-xs"
                      >
                        Show credential
                        <ExternalLink className="w-3 h-3 mr-1" />
                      </Button>
                    </div>
                  ))}
                  {/* PMP Cert */}
                  <div className="p-4 sm:p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors bg-gray-50/50">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base leading-snug mb-1">
                        {pmpCert.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {pmpCert.issuer} — Issued {pmpCert.date}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Credential ID: {pmpCert.credentialId}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-shrink-0 rounded-full text-xs"
                    >
                      Show credential
                      <ExternalLink className="w-3 h-3 mr-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
