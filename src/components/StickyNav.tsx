import { useState, useEffect } from 'react';

const sections = [
  { id: 'experience', label: 'الخبرات' },
  { id: 'skills', label: 'المهارات' },
  { id: 'projects', label: 'المشاريع' },
  { id: 'education', label: 'التعليم' },
  { id: 'contact', label: 'التواصل' },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Desktop: Show nav after hero
      // Mobile: Show nav after reaching skills section
      const isMobile = window.innerWidth < 1024;
      const thresholdSectionId = isMobile ? 'skills' : 'hero';
      const thresholdSection = document.getElementById(thresholdSectionId);
      
      if (thresholdSection) {
        const rect = thresholdSection.getBoundingClientRect();
        if (isMobile) {
          // On mobile, show when the top of skills section enters viewport
          setIsVisible(rect.top < window.innerHeight);
        } else {
          // On desktop, show when hero is scrolled past
          setIsVisible(rect.bottom < 100);
        }
      }

      // Detect active section
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      } 
      bottom-6 lg:bottom-auto lg:top-20 w-[95%] max-w-fit lg:w-auto`}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-2 py-1.5 sm:px-4 sm:py-2 border border-gray-100">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-gray-900 text-white shadow-md scale-105'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
