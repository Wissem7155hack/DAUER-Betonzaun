import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  ArrowRight, Shield, Leaf, PencilRuler, Shovel, CheckCircle, Play, Loader2, Send, Phone, ArrowDown,
  Maximize2, MapPin, Clock, Quote, Star
} from 'lucide-react';
import { NavigationLinks, ProjectImage, BlogPost } from './types';

// Import blog images
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';



import img8 from './images/8.png';

import img9 from './images/moroccan-flower.png';
import img10 from './images/9.png';
import img11 from './images/10.png';
import img12 from './images/logo.jpg';
import img13 from './images/arrows.png';
import img14 from './images/pattern.png';
import img15 from './images/me.png';

import img16 from './images/wall.jpg';
import img17 from './images/wall2.jpg';
import img18 from './images/wall3.jpg';
import img19 from './images/logo.jpg';








// BeforeAfterSlider Component
const BeforeAfterSlider: React.FC<{ beforeImage: string | Record<string, unknown>; afterImage: string | Record<string, unknown>; }> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={String(afterImage)}
          alt="Nach der Sanierung"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={String(beforeImage)}
          alt="Before Transformation"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0.5 h-6 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Blog Data ---
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'bausanierung-modernisierung',
    title: 'Werterhalt durch professionelle Sanierung',
    image: img16,
    excerpt: 'Eine fachgerechte Sanierung steigert nicht nur den Wohnkomfort, sondern sichert auch den Wert Ihrer Immobilie langfristig. Wir zeigen, worauf es ankommt.',
    story: [
      'Die Sanierung eines Gebäudes ist eine komplexe Aufgabe, die viel Erfahrung und Sachverstand erfordert. Bei DAUER verstehen wir uns als Partner, der die Substanz Ihres Hauses schützt und für die Zukunft fit macht.',
      '## Bestandsaufnahme',
      'Am Anfang steht eine gründliche Analyse der Bausubstanz. Feuchtigkeit, Risse oder energetische Schwachstellen müssen erkannt und bewertet werden.',
      '## Erhalt des Charakters',
      'Bei Altbauten ist Fingerspitzengefühl gefragt. Unser Ziel ist es, moderne Wohnstandards zu schaffen, ohne den ursprünglichen Charme des Gebäudes zu zerstören.',
      '## Energieeffizienz',
      'Ein Schwerpunkt unserer Arbeit liegt auf der energetischen Sanierung. Durch Dämmung und moderne Materialien senken wir Ihre Betriebskosten nachhaltig.'
    ],
    tips: [
      { title: 'Frühzeitig planen', description: 'Sanierungen brauchen Vorlaufzeit für Genehmigungen und Planung.' },
      { title: 'Förderung', description: 'Informieren Sie sich über staatliche Förderprogramme für energetische Sanierung.' }
    ],
    qa: [
      { question: 'Wie lange dauert eine Sanierung?', answer: 'Das hängt stark vom Umfang ab. Eine Kernsanierung kann mehrere Monate dauern.' },
      { question: 'Arbeiten Sie auch im bewohnten Zustand?', answer: 'Ja, wir planen die Bauphasen so, dass die Belastung für Sie minimiert wird.' }
    ]
  },
  {
    id: '2',
    slug: 'neubau-prozess',
    title: 'Ihr Weg zum Traumhaus: Der Neubau',
    image: img17,
    excerpt: 'Vom ersten Spatenstich bis zum Einzug begleiten wir Sie. Erfahren Sie mehr über unseren strukturierten Bauprozess für Neubauprojekte.',
    story: [
      'Der Bau eines eigenen Hauses ist für viele Menschen die größte Investition ihres Lebens. Wir bei DAUER sind uns dieser Verantwortung bewusst.',
      '## Planungsphase',
      'Gemeinsam mit Architekten und Statikern setzen wir Ihre Wünsche in konkrete Pläne um. Wir kümmern uns um Bauanträge und Behördengänge.',
      '## Rohbau',
      'Hier entsteht das Skelett Ihres Hauses. Wir arbeiten mit hochwertigem Beton und Mauerwerk, um eine solide Basis für Generationen zu schaffen.',
      '## Ausbau',
      'In der Ausbauphase koordinieren wir alle Gewerke, damit Elektrik, Sanitär und Innenausbau Hand in Hand gehen.'
    ],
    tips: [
      { title: 'Budgetplanung', description: 'Planen Sie einen Puffer für unvorhergesehene Ausgaben ein.' },
      { title: 'Materialwahl', description: 'Setzen Sie auf langlebige und ökologische Baustoffe.' }
    ],
    qa: [
      { question: 'Bauen Sie auch schlüsselfertig?', answer: 'Ja, auf Wunsch übernehmen wir die komplette Fertigstellung bis zum Einzug.' },
      { question: 'Welche Regionen bedienen Sie?', answer: 'Wir sind hauptsächlich regional tätig, um kurze Wege und engen Kontakt zu garantieren.' }
    ]
  }
];



// --- Utility Components ---

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionTitle: React.FC<{ subtitle: string; title: string; align?: 'left' | 'center' }> = ({ subtitle, title, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-earth-900 relative inline-block">
      {title}
      <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-gold-500"></span>
    </h2>
  </div>
);

// Kontaktformular Komponente
interface ContactFormProps {
  variant?: 'dark' | 'light';
  showLogo?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'dark', showLogo = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Ensure you have a valid key or keep existing logic if it was empty

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        form.reset();
      } else {
        console.error("Web3Forms Error:", data);
        alert("Error sending: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("A network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgColor = variant === 'light' ? 'bg-white' : 'bg-black';
  const textColor = variant === 'light' ? 'text-earth-900' : 'text-white';
  const labelColor = variant === 'light' ? 'text-earth-900' : 'text-white';
  const inputBg = variant === 'light' ? 'bg-gray-50' : 'bg-white';
  const inputBorder = variant === 'light' ? 'border border-gray-200' : '';

  return (
    <>
      <div className={`${bgColor} p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 transition-colors duration-300`}>
        {showLogo && (
          <div className="flex justify-center mb-6">
            <img
              src={img12}
              alt="Our Team"
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        )}
        <h3 className={`text-2xl md:text-3xl font-black ${textColor} text-center mb-6 md:mb-8 uppercase font-sans`}>
          Kostenlose Beratung
        </h3>


        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name Field */}
          <div>
            <label htmlFor="name" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Vollständiger Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Max Mustermann"
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base`}
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Telefon *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+49 123 456 789"
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base`}
              required
            />
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Ihre Stadt *
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Kuppenheim"
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base`}
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Projektbeschreibung *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht..."
              rows={3}
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none`}
              required
            />
          </div>

          {/* Checkbox for Terms */}
          <div className="flex items-start gap-2">
            <input
              id="agb"
              type="checkbox"
              className="mt-1"
              required
            />
            <label htmlFor="agb" className={`text-xs ${variant === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Ich stimme den{' '}
              <a
                href="/agb"
                className="text-green-500 underline hover:text-green-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                AGB
              </a>{' '}
              zu und erlaube die Kontaktaufnahme.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4a7c59] hover:bg-[#3d664a] text-white font-black uppercase py-4 rounded-md text-lg md:text-xl tracking-wide transition-colors duration-300 mt-2 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Senden...
              </>
            ) : (
              'Anfrage Senden'
            )}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative transform transition-all scale-100">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Vielen Dank!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Wir haben Ihre Anfrage erhalten. Unser Team wird sich in Kürze bei Ihnen melden.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#4a7c59] text-white font-bold py-3 rounded-lg hover:bg-[#3d664a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Hauptabschnitte ---

const HeroText = () => (
  <div className="max-w-2xl text-center lg:text-left">
    <div className="overflow-hidden mb-2">
      <p className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm animate-[fadeInUp_1s_ease-out_forwards]">
        Bauunternehmen
      </p>
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] drop-shadow-2xl mb-6 md:mb-8 animate-[fadeInUp_1.2s_ease-out_forwards]">
      Ihr Partner für
      <br />
      <span className="italic font-light text-gold-400">anspruchsvolle Bauprojekte</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl border-l-2 border-gold-500 pl-4 md:pl-6 mb-8 md:mb-10 animate-[fadeInUp_1.4s_ease-out_forwards] mx-auto lg:mx-0">
      DAUER ist Ihr zuverlässiges Bauunternehmen für Hochbau, Sanierung und Betonarbeiten. Wir realisieren Ihre Visionen mit handwerklicher Präzision, hochwertigen Materialien und jahrzehntelanger Erfahrung.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 md:gap-5 animate-[fadeInUp_1.6s_ease-out_forwards] justify-center lg:justify-start">
      <Link
        to={NavigationLinks.SERVICES}
        className="px-6 md:px-10 py-3 md:py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold tracking-widest uppercase transition-all duration-300 text-center shadow-xl hover:-translate-y-1 text-sm md:text-base"
      >
        Unsere Leistungen
      </Link>
      <Link
        to={NavigationLinks.PROJECTS}
        className="px-6 md:px-10 py-3 md:py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold tracking-widest uppercase transition-all duration-300 text-center backdrop-blur-sm hover:-translate-y-1 text-sm md:text-base"
      >
        Projekte ansehen
      </Link>
    </div>
  </div>
);

const Hero = () => (
  <div>
    {/* Desktop Layout */}
    <div className="hidden lg:block relative min-h-screen w-full overflow-visible pb-12">
      {/* Hintergrundbild mit langsamer Zoom-Effekt */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
        style={{ backgroundImage: `url(${img7})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-black/20"></div>
      </div>

      {/* Inhalt */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10 pt-32 md:pt-40 lg:pt-48">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <HeroText />
          {/* Kontaktformular rechts - für Desktop sichtbar */}
          <div className="animate-[fadeInUp_1.6s_ease-out_forwards]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-px h-8 md:h-12 bg-white/50"></div>
        </div>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="lg:hidden w-full bg-white">
      {/* Top Section: Image, Text, Arrows */}
      <div className="relative h-screen flex flex-col justify-center pb-40">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url(${img7})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center justify-center h-full pt-20">
          <HeroText />
        </div>

        {/* Downward Arrows */}
        <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <img
            src={img13}
            alt="Scroll Down"
            className="w-36 h-auto object-contain drop-shadow-lg"
          />
        </div>







      </div>
      {/* Bottom Section: White Background Contact Form */}
      <div className="bg-white px-4 py-16" >


        <ContactForm variant="light" showLogo={true} />
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <PencilRuler className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Planung & Architektur",
      desc: "Umfassende Planung und statische Berechnung für Ihr Bauvorhaben."
    },
    {
      icon: <Shovel className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Hochbau & Rohbau",
      desc: "Erstellung von Rohbauten, Mauerwerks- und Betonarbeiten."
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Sanierung",
      desc: "Fachgerechte Altbausanierung, Modernisierung und Instandsetzung."
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Schlüsselfertigbau",
      desc: "Wir übernehmen die gesamte Abwicklung bis zur Schlüsselübergabe."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Unsere Leistungen" title="Qualitätsarbeit" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="h-full p-6 md:p-8 bg-white hover:bg-earth-900 group transition-all duration-500 shadow-sm hover:shadow-xl border-b-2 border-transparent hover:border-gold-500">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-stone-100 group-hover:bg-white/10 rounded-full flex items-center justify-center text-earth-900 group-hover:text-gold-500 mb-4 md:mb-6 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-earth-900 group-hover:text-white mb-3 md:mb-4 transition-colors">{s.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="py-16 md:py-24 bg-earth-900 text-white overflow-hidden relative">


    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <RevealOnScroll>
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border border-gold-500/30 z-0"></div>
            <img
              src={img7}
              alt="Arbeiten von DAUER Betonzaun"
              className="relative z-10 w-full h-[400px] md:h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white text-earth-900 p-4 md:p-8 shadow-xl max-w-xs hidden lg:block z-20">
              <p className="font-serif text-lg md:text-2xl italic">"Qualität, die Generationen überdauert."</p>
              <p className="text-right mt-2 md:mt-4 font-bold text-gold-600 text-xs md:text-sm tracking-widest">— DAUER</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="lg:w-1/2 space-y-6 md:space-y-8 mt-8 lg:mt-0">
          <RevealOnScroll delay={200}>
            <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">Unsere Philosophie</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 leading-tight">Willkommen bei <span className="text-gold-500 italic">DAUER</span></h2>

            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mt-4 md:mt-6">
              Ihr Partner für professionelles Bauen. Wir stehen für Qualität, Termintreue und solide Handwerkskunst.
            </p>

            {/* Unternehmensteil */}
            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-sm mt-6 md:mt-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <img
                src={img12} // Keep or update logo if available
                alt="Logo DAUER"
                className="w-32 h-24 md:w-35 md:h-24 object-cover border-2 border-gold-500 shadow-md"
              />
              <div>
                <h4 className="text-lg md:text-xl font-serif text-white">Ihr Baupartner</h4>
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">DAUER</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              {[
                { title: "Kompetente Bauleitung", desc: "Erfahrene Bauleiter überwachen jedes Projekt." },
                { title: "Termingerechte Fertigstellung", desc: "Wir halten uns an vereinbarte Zeitpläne." },
                { title: "Hochwertige Bausubstanz", desc: "Einsatz von qualitätsgeprüften Materialien." }
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="mt-1 mr-3 md:mr-4 text-gold-500 shrink-0"><CheckCircle size={20} className="md:w-6 md:h-6" /></div>
                  <div>
                    <h4 className="text-white font-bold font-serif text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-8">
              <Link to={NavigationLinks.ABOUT} className="inline-flex items-center text-gold-500 hover:text-white uppercase tracking-widest font-bold text-sm transition-colors border-b border-gold-500 pb-1 hover:border-white">
                Mehr über uns erfahren <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsGallery = () => {
  const [images] = useState<ProjectImage[]>([
    { id: '1', url: img16, title: 'Projekt 1' },
    { id: '2', url: img17, title: 'Projekt 2' },
    { id: '3', url: img18, title: 'Projekt 3' },
  ]);

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="unsere Projekte" title="Aktuelle Projekte & Konzepte" />
        </RevealOnScroll>

        {/* Galerie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-1 mt-8 md:mt-12">
          {images.map((img, index) => (
            <RevealOnScroll key={img.id} delay={index * 50}>
              <div className="block">
                <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                  <img
                    src={String(img.url)}
                    alt="Bauprojekt"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-earth-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                    <span className="text-gold-500 text-xs tracking-widest uppercase mb-2">
                      DAUER
                    </span>
                    <h4 className="text-lg md:text-2xl font-serif text-white mb-3 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-2">
                      Projekt {index + 1}
                    </h4>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to={NavigationLinks.PROJECTS} className="inline-block px-6 md:px-10 py-3 md:py-4 border-2 border-earth-900 text-earth-900 font-bold uppercase tracking-widest hover:bg-earth-900 hover:text-white transition-colors text-sm md:text-base bg-white/50 backdrop-blur-sm">
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Styles for Animations ---
const AnimationStyles = () => (
  <style>{`
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    .animate-wiggle {
      animation: wiggle 1s ease-in-out infinite;
    }
  `}</style>
);

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const googleMapsUrl = "https://www.google.com/maps?q=8+Tanager+Way,+Winkler,+MB+R6M+0E7,+Canada&z=19&output=embed";

  const allReviews = [
    { name: "SH Garten- & Landschaftsbau", time: "1 Woche her", text: "Mit DAUER habe ich eine tolle Erfahrung gemacht. Zuverlässig - Beratung - Planen - Durchführen 👍🤝" },
    { name: "Michael Müller", time: "2 Wochen her", text: "Hervorragende Arbeit! Der Rohbau wurde schnell und präzise fertiggestellt. Das Team war pünktlich und professionell." },
    { name: "Maria Fischer ", time: "1 Monat her", text: "Sehr zufrieden mit der Sanierung. Solide Arbeit und faire Preise." },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const displayedReviews = allReviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-16 md:py-24 bg-stone-100 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Google Bewertungen" title="Was unsere Kunden sagen" />
        </RevealOnScroll>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedReviews.map((review, i) => (
            <RevealOnScroll key={`${currentPage}-${i}`} delay={i * 100}>
              <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg h-full flex flex-col hover:shadow-xl transition-shadow">
                {/* Header with Avatar and Name */}
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-lg mr-3 shrink-0">
                    {review.name[0]}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-1 mb-1">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-earth-900 text-base md:text-lg hover:text-gold-500 transition-colors cursor-pointer"
                      >
                        {review.name}
                      </a>
                      <div className="relative group">
                        <img src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000" alt="Verified Badge" className="w-4 h-4" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          Verified Customer
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{review.time}</p>
                  </div>
                </div>

                {/* Google Logo */}
                <div className="mb-3 text-xs">
                  <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" fontSize="16" fontWeight="500">
                      <tspan fill="#4285F4">G</tspan>
                      <tspan fill="#EA4335">o</tspan>
                      <tspan fill="#FBBC04">o</tspan>
                      <tspan fill="#34A853">g</tspan>
                      <tspan fill="#EA4335">l</tspan>
                      <tspan fill="#4285F4">e</tspan>
                    </text>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex text-gold-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">{review.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-6 py-2 md:py-3 bg-earth-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-gold-500 hover:text-earth-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            ← Back
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-sm md:text-base transition-all ${i === currentPage
                  ? 'bg-gold-500 text-earth-900'
                  : 'bg-earth-900 text-white hover:bg-gold-500 hover:text-earth-900'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="px-6 py-2 md:py-3 bg-earth-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-gold-500 hover:text-earth-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            Next →
          </button>
        </div>

        {/* Google Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            <span className="font-bold">Google</span> Reviews – Average: ⭐⭐⭐⭐⭐
          </p>
        </div>
      </div>
    </section>
  );
};

const InteractiveMap = () => (
  <div className="w-full h-[300px] md:h-[500px] relative">
    <iframe
      src="https://www.google.com/maps?q=8+Tanager+Way,+Winkler,+MB+R6M+0E7,+Canada&z=19&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Castor Finishing Location"
      className="transition-all duration-700"
    ></iframe>
  </div>
);

// --- Seitenzusammenfassungen ---

const PageHeader: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => (
  <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] w-full overflow-hidden flex items-center justify-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 text-center px-4">
      <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">{subtitle}</span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 md:mb-6 animate-[fadeInUp_1s_ease-out_forwards]">{title}</h1>
    </div>
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <ServicesSection />
    <AboutPreview />
    {/* ProjectsGallery commented out as requested */}
    {/* <ProjectsGallery /> */}
    <Testimonials />
    <InteractiveMap />
  </>
);

const ServicesPage = () => (
  <>
    <PageHeader
      title="Unsere Leistungen"
      subtitle="Handwerkskunst & Qualität"
      image={img7}
    />
    <ServicesSection />
    <section className="py-12 md:py-20 bg-earth-900 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">Benötigen Sie eine persönliche Beratung?</h2>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">Wir bieten maßgeschneiderte Lösungen für Privat- und Geschäftskunden.</p>
        <Link to={NavigationLinks.CONTACT} className="inline-block px-6 md:px-8 py-2 md:py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-earth-900 transition-colors uppercase tracking-widest font-bold text-sm md:text-base">
          Beratung anfordern
        </Link>
      </div>
    </section>
    <Testimonials />
  </>
);

const ProjectsPage = () => (
  <>
    <PageHeader
      title="Projekte"
      subtitle="Inspirationen & Realisierungen"
      image={img7}
    />
    <ProjectsGallery />
    <div className="bg-stone-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 italic text-sm md:text-base">Ausgewählte Projekte</p>
      </div>
    </div>
  </>
);

const AboutPage = () => (
  <>
    <PageHeader
      title="Über uns"
      subtitle="Unsere Geschichte"
      image={img7}
    />
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">


      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="prose prose-sm md:prose-lg prose-stone mx-auto">
          {/* Unternehmen */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-earth-800 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={img12}
                alt="Our Team"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <h4 className="text-xl md:text-2xl font-serif text-earth-900">Owner's name</h4>
              <p className="text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest">Proprietor / Contact Person</p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4 md:mb-6 text-center">Unternehmensprofil & Leistungen</h3>
          <p className="leading-loose text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            DAUER ist Ihr Experte für professionelles Bauen. Wir spezialisieren uns auf Hochbau, Sanierungen und Betonarbeiten für private und gewerbliche Kunden. Unsere Bauwerke bieten nicht nur Schutz und Stabilität, sondern überzeugen auch durch ihre Beständigkeit.
          </p>

          <h4 className="text-lg font-serif text-earth-900 mt-4">Unsere Kernkompetenzen</h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Rohbau & Betonbau:</strong> Solide Erstellung von Bauwerken und Fundamenten.</li>
            <li><strong>Sanierung:</strong> Werterhalt durch fachgerechte Modernisierung.</li>
            <li><strong>Langlebigkeit:</strong> Bauen für die Zukunft mit besten Materialien.</li>
            <li><strong>Projektmanagement:</strong> Alles aus einer Hand für einen reibungslosen Ablauf.</li>
            <li><strong>Beratung:</strong> Persönliche Planung und individuelle Konzepte für Ihr Bauvorhaben.</li>
          </ul>

          <h4 className="text-lg font-serif text-earth-900 mt-2">Unsere Werte</h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Qualität:</strong> Wir verwenden nur hochwertigen Beton und Baumaterialien.</li>
            <li><strong>Zuverlässigkeit:</strong> Termingerechte Ausführung und klare Absprachen.</li>
            <li><strong>Transparenz:</strong> Faire Preise und detaillierte Angebote.</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 md:py-12 text-center border-y border-gray-200 my-8 md:my-12">
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">29</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Jahre Erfahrung</span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">250+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Realisierte Projekte</span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Kundenzufriedenheit</span>
            </div>
          </div>

          {/* Kontaktbereich */}
          <div className="bg-stone-50 p-6 md:p-8 rounded-lg mt-8 md:mt-12">
            <h4 className="text-xl font-serif text-earth-900 mb-4 text-center">Kontakt</h4>
            <div className="grid grid-cols-1 gap-4 text-center">
              <div>
                <Send className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <a href="mailto:info@dauerbetonzaun.de" className="text-earth-900 hover:text-gold-500 transition-colors">info@dauerbetonzaun.de</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <InteractiveMap />
  </>
);

const ContactPage = () => (
  <>
    <PageHeader
      title="Kontakt"
      subtitle="Beratung & Anfragen"
      image={img7}
    />

    {/* Detaillierter Kontaktbereich */}
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Kontaktinformationen */}
          <div>
            <RevealOnScroll>
              <SectionTitle subtitle="Kontakt" title="Ihre Anfrage" align="left" />
            </RevealOnScroll>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">Unser Standort</h4>
                  <p className="text-gray-600">Deutschland</p>
                </div>
              </div>

              <div className="flex items-start">
                <Send className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">E-Mail</h4>
                  <a href="mailto:info@dauer.de" className="text-earth-900 hover:text-gold-500 transition-colors">info@dauer.de</a>
                </div>
              </div>

              {/* Soziale Medien */}
              <div className="pt-6">
                <h4 className="font-serif text-lg text-earth-900 mb-4">Folgen Sie uns</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61584302041280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-earth-900 text-white p-3 rounded-full hover:bg-gold-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div>
            <RevealOnScroll delay={200}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>

    <InteractiveMap />
  </>
);

// Blog List Page
const BlogListPage = () => (
  <>
    <PageHeader
      title="Blog & Guide"
      subtitle="Tips & Experiences"
      image="images/grass.jpg"
    />
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="From the Field" title="Our Project Stories" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 100}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="bg-white border border-stone-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-earth-900 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gold-500 font-bold text-sm uppercase tracking-widest">
                      Read More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  </>
);

// Individual Blog Post Page
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-earth-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-gold-500 hover:text-gold-600 font-bold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${post.image}")` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
              Blog & Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 animate-[fadeInUp_1s_ease-out_forwards] leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl animate-[fadeInUp_1.2s_ease-out_forwards]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Before/After Slider - Only for garden transformation post */}
      {post.slug === 'garden-transformation' && (
        <div className="py-12 md:py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <RevealOnScroll>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-4">
                  Comparison of the Transformation
                </h2>
                <p className="text-gray-600 text-lg">
                  Drag the slider to see the dramatic transformation
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <BeforeAfterSlider
                beforeImage={img1}
                afterImage={img3}
              />
            </RevealOnScroll>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Story Section */}
          <RevealOnScroll>
            <div className="prose prose-lg max-w-none mb-12">
              {post.story.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Tips Section */}
          <RevealOnScroll delay={200}>
            <div className="my-16 md:my-20">
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 flex items-center">
                <Leaf className="mr-4 text-gold-500" size={32} />
                Tips & Tricks
              </h2>
              <div className="space-y-6">
                {post.tips.map((tip, index) => (
                  <div key={index} className="bg-stone-50 p-6 md:p-8 border-l-4 border-gold-500 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-serif text-earth-900 mb-3 flex items-center">
                      <CheckCircle className="mr-3 text-gold-500" size={20} />
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-8">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Q&A Section */}
          <RevealOnScroll delay={400}>
            <div className="my-16 md:my-20">
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 flex items-center">
                <Quote className="mr-4 text-gold-500" size={32} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.qa.map((item, index) => {
                  const isOpen = openQuestions.includes(index);

                  return (
                    <div key={index} className="border border-stone-200 rounded-lg overflow-hidden hover:border-gold-500 transition-colors">
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left p-6 bg-white hover:bg-stone-50 transition-colors flex items-center justify-between group"
                      >
                        <h3 className="text-lg md:text-xl font-bold text-earth-900 pr-4 group-hover:text-gold-600 transition-colors">
                          Q: {item.question}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="p-6 pt-0 bg-stone-50">
                          <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gold-500">
                            <strong className="text-gold-600">A:</strong> {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Call to Action */}
          <RevealOnScroll delay={600}>
            <div className="mt-16 md:mt-20 p-8 md:p-12 bg-earth-900 text-white text-center rounded-lg">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Have questions or want to start a project?</h3>
              <p className="text-gray-300 mb-6 md:mb-8">
                As your local contractor in Winkler, Canada, I am here to help with advice and action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+12043848706" className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase tracking-widest transition-colors">
                  <Phone className="mr-2" size={20} />
                  +1 (204) 384-8706
                </a>
                <Link to={NavigationLinks.CONTACT} className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-earth-900 font-bold uppercase tracking-widest transition-colors">
                  Contact Us
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Castor Finishing<br />
                8 Tanager Way, Winkler, MB R6M 0E7
              </p>
            </div>
          </RevealOnScroll>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center text-gold-500 hover:text-gold-600 font-bold uppercase tracking-widest text-sm transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const FullGalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const allGalleryImages: ProjectImage[] = [
    { id: '1', url: img1, title: '' },
    { id: '2', url: img2, title: '' },
    { id: '3', url: img3, title: '' },
    { id: '4', url: img4, title: '' },
    { id: '5', url: img5, title: ' ' },
    { id: '6', url: img6, title: '' },
    { id: '7', url: img7, title: '' },
    { id: '8', url: img8, title: '' },

  ];

  // Display only 16 images initially, or all if expanded
  const displayedImages = isExpanded ? allGalleryImages : allGalleryImages.slice(0, 16);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowLeft' && selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      } else if (e.key === 'ArrowRight' && selectedImageIndex < allGalleryImages.length - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, allGalleryImages.length]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (selectedImageIndex === null) return;

    if (isLeftSwipe && selectedImageIndex < allGalleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
    if (isRightSwipe && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <PageHeader
        title="unserer Galerie"
        subtitle="Elegant Projects"
        image={img7}
      />

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url('./images/grid.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <SectionTitle subtitle="komplettes Portfolio" title="20+ Premium Projects" align="center" />
          </RevealOnScroll>

          {/* Masonry-Style Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {displayedImages.map((img, index) => (
              <RevealOnScroll key={img.id} delay={index * 30}>
                <div
                  className="group relative overflow-hidden aspect-square cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={String(img.url)}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6">
                    <h4 className="text-white font-serif font-bold text-lg text-center mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                    <button className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase text-xs tracking-widest rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
                      View
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Show More Button */}
          {!isExpanded && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setIsExpanded(true)}
                className="px-8 md:px-12 py-4 md:py-5 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Show More
              </button>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-20 md:mt-28 p-8 md:p-12 bg-stone-50 border-l-4 border-gold-500 rounded-lg">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4">Be Inspired</h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Each project in this gallery is a masterpiece of custom design. From modern renovations to classic finishing work – discover the diverse possibilities for your dream project.
              </p>
              <Link to={NavigationLinks.CONTACT} className="inline-block px-8 py-3 bg-earth-900 text-white font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-earth-900 transition-colors rounded-lg">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Image */}
            <img
              src={String(allGalleryImages[selectedImageIndex].url)}
              alt={allGalleryImages[selectedImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center z-10"
                aria-label="Previous Image"
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < allGalleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center z-10"
                aria-label="Next Image"
              >
                ›
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {allGalleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden font-sans text-earth-900 selection:bg-gold-500 selection:text-white bg-stone-50">
        <AnimationStyles />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={NavigationLinks.HOME} element={<HomePage />} />
            <Route path={NavigationLinks.SERVICES} element={<ServicesPage />} />
            <Route path={NavigationLinks.PROJECTS} element={<ProjectsPage />} />
            <Route path={NavigationLinks.GALLERY} element={<FullGalleryPage />} />
            {/* <Route path={NavigationLinks.BLOG} element={<BlogListPage />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogPostPage />} /> */}
            <Route path={NavigationLinks.ABOUT} element={<AboutPage />} />
            <Route path={NavigationLinks.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Global WhatsApp Button & CTA removed */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end pointer-events-none">
          {/* Removed as requested */}
        </div>
      </div>
    </Router>
  );
};

export default App;
