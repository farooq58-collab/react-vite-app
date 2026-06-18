import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'; // Might be needed if vite left it, but we use index.css mostly

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};
// Swiper imports removed
const getAssetUrl = (path) => {
  try {
    const base = window.location.origin + window.location.pathname;
    const baseDir = base.substring(0, base.lastIndexOf('/'));
    return `${baseDir}/${path}`;
  } catch (e) {
    return path;
  }
};
import logo from "./assets/Logo(white).png";


import img1 from './assets/Gallery/Picture1.jpg';
import img2 from './assets/Gallery/Picture2.jpg';
import img3 from './assets/Gallery/Picture3.jpg';
import img4 from './assets/Gallery/Picture4.jpg';
import img5 from './assets/Gallery/Picture5.jpg';
import img6 from './assets/Gallery/Picture6.jpg';
import img7 from './assets/Gallery/Picture7-7.jpg';
import img8 from './assets/Gallery/Picture8.jpg';
import img9 from './assets/Gallery/Picture9.jpg';
import imgGallery from './assets/Gallery/Gallery.jpeg';
import imgGalleryyyyy from './assets/Gallery/galleryyyyyyyyyyyyyyyyy.png';
import imgGlry3 from './assets/Gallery/new gallery 2.png';

// Course Captain Images
import captainImg from './assets/Course Captain/Course Captain.jpg';
import certIelts from './assets/Course Captain/IELTS Certificate.png';
import certPte from './assets/Course Captain/PTE certificate.png';
import certPreply from './assets/Course Captain/Preply Certificate.png';

// Flag SVGs
import flagPk from './assets/flags/pk.svg';
import flagIn from './assets/flags/in.svg';
import flagAe from './assets/flags/ae.svg';
import flagSa from './assets/flags/sa.svg';

// WhatsApp Testimonials Images
import ahsanDp from './assets/Course Captain/Ahsan Abdali (1).png';
import ahsanWa from './assets/Course Captain/Ahsan Ali Testi.jpeg';

import jalilDp from './assets/Course Captain/Barristor Abdul Jalil.png';
import jalilWa from './assets/Course Captain/Barristor Abdul Jalil testi.jpeg';

import zunairaDp from './assets/Course Captain/Dr. Zunaira.png';
import zunairaWa from './assets/Course Captain/Dr zunaira testi.jpeg';

import yumnaDp from './assets/Course Captain/Yumna Shahid.png';
import yumnaWa from './assets/Course Captain/Yumna testi.jpeg';

import murtazaWa from './assets/Course Captain/Murtaza Nizamani testi.png';

const murtazaDp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23002966;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23001f4d;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='50' fill='url(%23grad)'/><text x='50%25' y='54%25' font-size='36' font-family='system-ui, -apple-system, sans-serif' font-weight='bold' fill='white' dominant-baseline='middle' text-anchor='middle'>MN</text></svg>";

const whatsappTestimonials = [
  { name: "Ahsan Abdali", dp: ahsanDp, wa: ahsanWa, subheading: "Exceptional Guidance" },
  { name: "Barrister Abdul Jalil", dp: jalilDp, wa: jalilWa, subheading: "Constant Support" },
  { name: "Dr. Zunaira Shahid", dp: zunairaDp, wa: zunairaWa, subheading: "Transformative Experience" },
  { name: "Yumna Saad", dp: yumnaDp, wa: yumnaWa, subheading: "Interactive Teaching" },
  { name: "Murtaza Nizamani", dp: murtazaDp, wa: murtazaWa, subheading: "Insightful Evaluation" },
];

const galleryImages = [
  { src: img1, aspect: "624/368" },
  { src: img2, aspect: "624/373" },
  { src: img3, aspect: "624/342" },
  { src: img4, aspect: "624/468" },
  { src: img5, aspect: "534/864" },
  { src: img6, aspect: "624/468" },
  { src: img7, aspect: "624/696" },
  { src: img8, aspect: "624/318" },
  { src: img9, aspect: "624/398" },
  { src: imgGallery, aspect: "1/1" },
  { src: imgGalleryyyyy, aspect: "1633/963" },
  { src: imgGlry3, aspect: "1633/683" }
];
import t1 from './assets/Testimonials/Hussain Ali Shah.jpg';
import t2 from './assets/Testimonials/Ahmed Bhugti.jpg';
import t3 from './assets/Testimonials/Arbaz Khan.jpg';
import t4 from './assets/Testimonials/Bilal Samo.jpg';
import t5 from './assets/Testimonials/Zahabiya Esmail.jpg';
import t6 from './assets/Testimonials/Wasif Ali.jpg';
import t7 from './assets/Testimonials/Zehra Waqar.jpg';
import t8 from './assets/Testimonials/Abdul Razzak.jpg';
import t9 from './assets/Testimonials/Zohaib Ahmed.jpg';
import t10 from './assets/Testimonials/Shifa Ali.jpg';
import t11 from './assets/Testimonials/Ali Anwar.jpg';
import t12 from './assets/Testimonials/Ghulam Rasool.jpg';
import t13 from './assets/Testimonials/Hamood Mari.jpg';
import t14 from './assets/Testimonials/Taha Sufi.jpg';
import t15 from './assets/Testimonials/Israr Ahmed.jpg';
import commitmentImg1 from './assets/Commitment/WhatsApp Image 2026-05-22 at 1.50.25 AM.jpeg';
import commitmentImg2 from './assets/Commitment/WhatsApp Image 2026-05-22 at 1.50.26 AM.jpeg';
import commitmentImg3 from './assets/Commitment/WhatsApp Image 2026-05-22 at 1.50.27 AM.jpeg';

const testimonialsData = [
  {
    name: "Hussain Ali Shah",
    title: "Band 9.0 Reading",
    text: "The course's specific reading strategies transformed my approach, helping me achieve a perfect Band 9 in reading on my test! The techniques for matching headings and true/false questions were game-changers that turned my biggest weaknesses into my greatest strengths.",
    image: t1
  },
  {
    name: "Ahmed Bugti",
    title: "Band 8.5 in Reading",
    text: "I was struggling with time management and matching heading question type until I found Mindful. The right reading strategies from the course gave me full control over every question type and helped me approach the test with clarity and precision.",
    image: t2
  },
  {
    name: "Arbaz Khan",
    title: "Band 8.0 in Speaking",
    text: "One simple technique from the course helped me jump from 6.5 to a Band 8 in speaking! The mock test pinpointed that my word stress and intonation were off, making my speech less natural and this single adjustment completely transformed my IELTS result.",
    image: t3
  },
  {
    name: "Bilal Samo",
    title: "5.5 - 7.0 in Writing Band",
    text: "I was stuck in writing and didn’t understand what was holding my score back. The detailed feedback pinpointed my exact grammar issues and showed me that logical structure which transformed my writing from 5.5 to 7.0 and helped me achieve 7.5 overall.",
    image: t4
  },
  {
    name: "Zahabiya Ismail",
    title: "Overall Band 8.0",
    text: "Even with good English, my score was stuck at Band 6, and I had almost lost hope for my Canada PR. After joining the course, the turning point came through the 1:1 counselling sessions and consistent personalized feedback.",
    image: t5
  },
  {
    name: "Wasif Ali",
    title: "7.5 Band Overall",
    text: "After investing in multiple IELTS courses, I still lacked clarity and saw no real improvement. Despite my doubts, I chose to trust Mindful. The clear guidance and structured learning system here helped me secure Band 7.5 without wasting more time and money.",
    image: t6
  },
  {
    name: "Zehra Waqar",
    title: "Bands 7.5",
    text: "I had no confidence in writing but what stood out in the course was how complex strategies were simplified and backed with personalized feedback which has helped me organize my ideas clearly, and focus on what examiners actually look for.",
    image: t7,
    objectPosition: "object-center"
  },
  {
    name: "Abdul Razzaq",
    title: "Band 7.5 Overall",
    text: "After a few weeks of training with Mindful, everything became clear. The course has not only prepared me for the exam but developed solid skills across four modules specially in writing.",
    image: t8
  },
  {
    name: "Zohaib Ahmed",
    title: "Band 7.0",
    text: "With a full time job, I needed a flexible but serious program. The sessions at Mindful were focused, practical and tailored to my availability which helped me achieve band 7.0 despite my busy schedule.",
    image: t9
  },
  {
    name: "Shifa Ali",
    title: "7.5 Band Overall",
    text: "Band 7.5 was compulsory for my research degree program in Canada. Seeing consistent high-band success stories at Mindful gave me the confidence to trust them with my preparation. Alhamdulillah, they delivered on their promise and prepared me to achieve the band I needed.",
    image: t10
  },
  {
    name: "Ali Anwar",
    title: "Band 7.5 Writing",
    text: "Coming from a legal background, I struggled to control my long writing style. The course showed me how to focus on clarity instead of length. Their expert guidance helped me in presenting ideas in a controlled and exam-focused way.",
    image: t11
  },
  {
    name: "Ghulam Sarwar Memon",
    title: "7.5 Band",
    text: "What a motivational test prep!! I had no confidence and belief to crack IELTS. The mindset building part of the course was the game changer. I scored an impressive 7.5 band in the first-attempt.",
    image: t12
  },
  {
    name: "Hamood Mari",
    title: "7.5 Band",
    text: "The best thing I experienced at Mindful was the clear ‘test-ready’ guidance. It removed all confusion and helped me avoid booking the test too early. As a result, I entered the exam with complete confidence and achieved Band 7.5 without needing a second attempt.",
    image: t13
  },
  {
    name: "Taha Sufi",
    title: "Band 7.0",
    text: "I wasn’t sure if I was truly ready for the exam. The Mindful final mock changed that completely. Experiencing the real test conditions helped me build stamina and understand my weak areas, giving me the confidence to achieve Band 7 in 1st attempt.",
    image: t14
  },
  {
    name: "Israr Ahmed",
    title: "Band 7.0",
    text: "Within 3 weeks, I not only understood the exam format but also developed the skills, time management, and self-belief necessary to excel. Securing a 7.0 band score felt like an impossible dream at first, but with the support of Mindful, it became a remarkable reality.",
    image: t15
  }
];

const comparisonData = [
  { feature: "Band Diagnosis", trad: "No clear starting strategy", mindful: "Guided diagnosis & expert study plan" },
  { feature: "Feedback Quality", trad: "Only teacher OR only AI", mindful: "AI + Human Feedback & improvement plan" },
  { feature: "Practice Realism", trad: "Untimed or unrealistic practice", mindful: "Unlimited Exam Simulations + 50 Mock Tests" },
  { feature: "Speaking Practice", trad: "Limited speaking practice", mindful: "Dedicated 1:1 Speaking Mocks" },
  { feature: "Improvement Tracking", trad: "Just overall scores", mindful: "Skill-wise performance tracking" },
  { feature: "Learning Approach", trad: "Random tips & memorization", mindful: "Structured Frameworks" },
  { feature: "Consistency System", trad: "Inconsistent self-study", mindful: "Daily Practice System via platform" },
  { feature: "Instant Doubt Solving", trad: "Delayed or no support", mindful: "Ongoing Support outside the class" },
  { feature: "Strategic Guides", "trad": "Overloaded information", mindful: "Step-by-Step Digital Notes" },
  { feature: "Test-Registration Support", trad: "No clear readiness guidance", mindful: "Complete test-ready registration support" },
  { feature: "Refund Guarantee", trad: "No refunds", mindful: "Full protection Money Back Guarantee" }
];

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  const counterRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(easeProgress * end);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={counterRef}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const mythsData = [
  {
    num: "01",
    title: "IELTS is harder than other tests.",
    reality: "IELTS is not harder but different. It is the only exam which gives you a real speaking experience with a human examiner, unlike the other exams, which helps you build genuine confidence, not just test skills."
  },
  {
    num: "02",
    title: "My English is good, I don't need prep.",
    reality: "This is one of the most costly assumptions. IELTS tests specific skills, not perfect grammar. Even strong English candidates waste money on multiple attempts because they don't understand that IELTS is less about English and more about strategy and communication."
  },
  {
    num: "03",
    title: "My English is weak, so I can't do IELTS.",
    reality: "IELTS rewards clarity, not perfection. With the right strategy, structure, and accurate guidance, any student in the world can achieve their target band without sounding \"advanced\" or complex."
  }
];

const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
};

// Reusable Carousel component with CSS Scroll Snapping, Autoplay and Bottom Arrow Bar Controls
const Carousel = ({ children, className = "", autoplay = true, autoplayInterval = 4000 }) => {
  const containerRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isTouchActive, setIsTouchActive] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const isDraggingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef(null);
  const totalSlides = React.Children.count(children);

  const childrenArray = React.Children.toArray(children);
  const extendedChildren = totalSlides > 1 ? [
    ...childrenArray.map((child, idx) => React.cloneElement(child, { key: `copy0-${child.key || idx}` })),
    ...childrenArray.map((child, idx) => React.cloneElement(child, { key: `copy1-${child.key || idx}` })),
    ...childrenArray.map((child, idx) => React.cloneElement(child, { key: `copy2-${child.key || idx}` }))
  ] : children;

  const instantScroll = (left) => {
    const el = containerRef.current;
    if (el) {
      el.style.scrollBehavior = 'auto';
      el.style.scrollSnapType = 'none';
      el.scrollLeft = left;
      // Force a reflow to ensure the scroll position is updated instantly
      void el.offsetHeight;

      requestAnimationFrame(() => {
        if (el) {
          el.style.scrollBehavior = '';
          el.style.scrollSnapType = '';
        }
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current && totalSlides > 1) {
      const { scrollLeft } = containerRef.current;
      const childrenElements = containerRef.current.children;
      if (childrenElements.length > 0) {
        let minDiff = Infinity;
        let closestIdx = 0;
        for (let i = 0; i < childrenElements.length; i++) {
          const child = childrenElements[i];
          const diff = Math.abs(child.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        }
        const newActiveIndex = closestIdx % totalSlides;
        setActiveIndex(prev => (prev !== newActiveIndex ? newActiveIndex : prev));
      }
    } else if (containerRef.current) {
      setActiveIndex(0);
    }
  };

  const handleScrollEnd = () => {
    if (isDraggingRef.current) return;
    if (containerRef.current && totalSlides > 1) {
      const { scrollLeft } = containerRef.current;
      const childrenElements = containerRef.current.children;
      if (childrenElements.length > 0) {
        let minDiff = Infinity;
        let closestIdx = 0;
        for (let i = 0; i < childrenElements.length; i++) {
          const child = childrenElements[i];
          const diff = Math.abs(child.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = i;
          }
        }

        if (closestIdx < totalSlides) {
          const targetIdx = closestIdx + totalSlides;
          if (childrenElements[targetIdx]) {
            instantScroll(childrenElements[targetIdx].offsetLeft);
          }
        } else if (closestIdx >= 2 * totalSlides) {
          const targetIdx = closestIdx - totalSlides;
          if (childrenElements[targetIdx]) {
            instantScroll(childrenElements[targetIdx].offsetLeft);
          }
        }
      }
    }
  };

  React.useEffect(() => {
    const el = containerRef.current;
    if (el) {
      const onScroll = () => {
        handleScroll();
        
        // Debounce fallback for scrollend
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          handleScrollEnd();
        }, 150);
      };

      const onScrollEnd = () => {
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        handleScrollEnd();
      };

      el.addEventListener('scroll', onScroll, { passive: true });
      el.addEventListener('scrollend', onScrollEnd, { passive: true });
      
      // Initial check
      handleScroll();
      handleScrollEnd();

      const observer = new MutationObserver(() => {
        handleScroll();
        handleScrollEnd();
      });
      observer.observe(el, { childList: true, subtree: true });
      
      window.addEventListener('resize', onScrollEnd);
      return () => {
        el.removeEventListener('scroll', onScroll);
        el.removeEventListener('scrollend', onScrollEnd);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        observer.disconnect();
        window.removeEventListener('resize', onScrollEnd);
      };
    }
  }, [children, totalSlides]);

  // Handle touch and mouse dragging to prevent jump scroll behavior during interaction
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || totalSlides <= 1) return;

    const handleTouchStart = () => {
      isDraggingRef.current = true;
      setIsDragging(true);
      setIsTouchActive(true);
    };
    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      setIsTouchActive(false);
      handleScrollEnd();
    };
    const handleMouseDown = () => {
      isDraggingRef.current = true;
      setIsDragging(true);
    };
    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      handleScrollEnd();
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('mousedown', handleMouseDown, { passive: true });
    el.addEventListener('mouseup', handleMouseUp, { passive: true });
    el.addEventListener('mouseleave', handleMouseUp, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [totalSlides]);

  // Autoplay Effect (smooth continuous marquee with 0s delay)
  React.useEffect(() => {
    if (!autoplay || totalSlides <= 1) return;

    let animationFrameId;
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.8; // px per frame (adjust for smooth speed)

    const scroll = () => {
      // Pause if hovering, touching, or dragging
      if (isPaused || isTouchActive || isDraggingRef.current) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      scrollContainer.scrollLeft += scrollSpeed;

      const childrenElements = scrollContainer.children;
      if (childrenElements.length >= 3 * totalSlides) {
        const firstFirstSetChild = childrenElements[0];
        const firstSecondSetChild = childrenElements[totalSlides];
        const firstThirdSetChild = childrenElements[2 * totalSlides];
        
        if (firstFirstSetChild && firstSecondSetChild && firstThirdSetChild) {
          const setWidth = firstSecondSetChild.offsetLeft - firstFirstSetChild.offsetLeft;
          const secondSetStart = firstSecondSetChild.offsetLeft;
          const thirdSetStart = firstThirdSetChild.offsetLeft;

          // Seamless wrap around when reaching the boundary of the second set
          if (scrollContainer.scrollLeft >= thirdSetStart) {
            scrollContainer.scrollLeft -= setWidth;
          } else if (scrollContainer.scrollLeft < secondSetStart) {
            scrollContainer.scrollLeft += setWidth;
          }
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoplay, totalSlides, isPaused, isTouchActive]);

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const childrenElements = containerRef.current.children;
      if (childrenElements[index]) {
        const child = childrenElements[index];
        containerRef.current.scrollTo({
          left: child.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const isScrollSnapActive = isPaused || isTouchActive || isDragging;

  return (
    <div 
      className={`relative w-full group/carousel flex flex-col ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsTouchActive(true)}
      onTouchEnd={() => setIsTouchActive(false)}
      onTouchCancel={() => setIsTouchActive(false)}
    >
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="relative flex items-stretch overflow-x-auto gap-4 md:gap-6 hide-scrollbar px-1 py-4 w-full"
      >
        {extendedChildren}
      </div>

      {/* Control Bar (Arrow bar + indicators) */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4 relative z-20">
          {/* Previous Arrow Button */}
          <button
            onClick={() => {
              scrollToIndex(activeIndex + totalSlides - 1);
            }}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#002966] hover:bg-gray-50 active:bg-gray-100 hover:text-[#9c080a] active:text-[#9c080a] transition-all flex items-center justify-center shadow-xs cursor-pointer focus:outline-hidden"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Indicators dots/bars */}
          <div className="flex items-center gap-1.5 max-w-[60vw] overflow-x-auto py-1 hide-scrollbar">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx + totalSlides)}
                className={`h-2 rounded-full transition-all duration-300 shrink-0 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-6 bg-[#9c080a] shadow-xs' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={() => {
              scrollToIndex(activeIndex + totalSlides + 1);
            }}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#002966] hover:bg-gray-50 active:bg-gray-100 hover:text-[#9c080a] active:text-[#9c080a] transition-all flex items-center justify-center shadow-xs cursor-pointer focus:outline-hidden"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isHeroRevealed, setIsHeroRevealed] = React.useState(false);
  const [isSliderPaused, setIsSliderPaused] = React.useState(false);
  const [isMarqueePaused, setIsMarqueePaused] = React.useState(false);
  const [isRibbonPaused, setIsRibbonPaused] = React.useState(false);
  const [captainTab, setCaptainTab] = React.useState('profile');
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (isVideoModalOpen && videoRef.current) {
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(err => {
            console.log("Autoplay blocked or failed:", err);
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVideoModalOpen]);

  const [isStickyVisible, setIsStickyVisible] = React.useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = React.useState(null);
  const [showHeroOverlay, setShowHeroOverlay] = React.useState(false);
  const [isIframe, setIsIframe] = React.useState(false);
  const [iframeTop, setIframeTop] = React.useState(0);
  const [parentHeight, setParentHeight] = React.useState(window.innerHeight);
  const [hasReceivedScroll, setHasReceivedScroll] = React.useState(false);
  const heroRef = React.useRef(null);
  const footerRef = React.useRef(null);

  React.useEffect(() => {
    let hasReceivedMessage = false;

    const checkVisibility = (topVal, heightVal, iframeActive) => {
      setIsIframe(iframeActive);
      setIframeTop(topVal);
      setParentHeight(heightVal);

      let isPastHero = false;
      let isBeforeFooter = true;

      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroBottom = iframeActive ? (heroRect.bottom + topVal) : heroRect.bottom;
        isPastHero = heroBottom <= 100;
      } else {
        isPastHero = iframeActive ? (topVal < -500) : (window.scrollY > 500);
      }

      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const footerTop = iframeActive ? (footerRect.top + topVal) : footerRect.top;
        const screenHeight = iframeActive ? heightVal : window.innerHeight;
        isBeforeFooter = footerTop > screenHeight;
      }

      setIsStickyVisible(isPastHero && isBeforeFooter);
    };

    // Safe detection for iframe embedding (protects against cross-origin policy exceptions)
    let isEmbedded = false;
    try {
      isEmbedded = window.self !== window.top;
    } catch (e) {
      isEmbedded = true; // Security error confirms cross-origin iframe embedding
    }

    if (isEmbedded) {
      // Fallback: Show the sticky bar after 2 seconds if parent page does not broadcast scroll events
      const fallbackTimer = setTimeout(() => {
        if (!hasReceivedMessage) {
          setIsStickyVisible(true);
        }
      }, 2000);

      const handleMessage = (event) => {
        if (event.data && event.data.type === 'parent-viewport') {
          hasReceivedMessage = true;
          setHasReceivedScroll(true);
          const topVal = event.data.iframeTop;
          const heightVal = event.data.parentInnerHeight;
          checkVisibility(topVal, heightVal, true);

          // Direct GPU-accelerated DOM update for lag-free scroll positioning
          const wrapper = document.getElementById('sticky-action-bar');
          if (wrapper) {
            const width = window.innerWidth;
            const offset = width < 640 ? 170 : 120;
            const targetTop = -topVal + heightVal - offset;
            wrapper.style.transform = `translate3d(0, ${targetTop}px, 0)`;
          }
        }
      };

      window.addEventListener('message', handleMessage);
      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener('message', handleMessage);
      };
    }

    // Standalone / Localhost mode
    const handleScroll = () => {
      checkVisibility(0, window.innerHeight, false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      {/* Navigation */}
      <header className="bg-brand-blue shadow-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 md:py-4 flex items-center justify-between">
          
          {/* Logo (Left) */}
          <div className="flex-1 lg:flex-none lg:w-[220px] xl:w-[280px] flex justify-start items-center shrink-0">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="IELTS X MINDFUL"
                className="h-12 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav (Center) */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-8 text-white font-semibold text-[13px] xl:text-[15px]">
            <a href="#" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Home</a>
            <a href="#stats" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Stats</a>
            <a href="#myths" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Myths</a>
            <a href="#how-it-works" className="text-white hover:text-brand-red active:text-brand-red transition-colors">How It Works</a>
            <a href="#eligibility" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Eligibility</a>
            <a href="#gallery" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Gallery</a>
            <a href="#testimonials" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Testimonials</a>
            <a href="#preparation" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Pricing</a>
            <a href="#apply" className="text-white hover:text-brand-red active:text-brand-red transition-colors">Contact</a>
          </nav>

          {/* CTA & Mobile Toggle (Right) */}
          <div className="flex-none lg:w-[220px] xl:w-[280px] flex justify-end items-center shrink-0">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Admissions@mindful.com.pk" target="_blank" rel="noopener noreferrer" className="hidden lg:flex bg-brand-red text-white px-6 py-2.5 xl:py-3 rounded-md font-bold text-sm xl:text-base hover:bg-red-800 active:bg-red-800 transition-all hover:-translate-y-0.5 active:-translate-y-0.5 shadow-md items-center justify-center">
              Get Started
            </a>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2 ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-blue shadow-md border-t border-blue-900 flex flex-col items-center py-6 gap-6 text-white font-semibold sticky top-[72px] z-40">
          <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Home</a>
          <a href="#stats" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Stats</a>
          <a href="#myths" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Myths</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">How It Works</a>
          <a href="#eligibility" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Eligibility</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Gallery</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Testimonials</a>
          <a href="#preparation" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Pricing</a>
          <a href="#apply" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-red active:text-brand-red">Contact</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Admissions@mindful.com.pk" target="_blank" rel="noopener noreferrer" className="bg-brand-red text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-red-800 active:bg-red-800 transition-colors shadow-md mt-2">
            Get Started
          </a>
        </div>
      )}

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="bg-white min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 snap-start relative overflow-hidden"
        >
          {/* Subtle background glow effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9c080a]/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#002966]/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left Content Column */}
            <motion.div variants={fadeUp} className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Badge */}
              <div className="inline-block bg-[#002966]/10 border border-[#002966]/15 px-3 py-1 rounded-md text-xs font-bold text-[#002966] mb-6 uppercase tracking-widest mx-auto lg:mx-0">
                20+ Hours Live
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002966] leading-tight tracking-tight mb-4 w-full text-center lg:text-left">
                Achieve Your Target <br className="hidden sm:inline" />
                <span className="text-[#9c080a]">IELTS Band</span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed w-full text-center lg:text-left mx-auto lg:mx-0">
                Unlock your international career and education dreams. Master the exact strategies, get personalized feedback, and build the confidence you need to secure your target band score without retakes or guesswork.
              </p>

              {/* Rating and Enrolled */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 w-full">
                {/* 5 Yellow Stars */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#002966] font-bold ml-1">4.9</span>
                <span className="h-4 w-px bg-gray-200 mx-2"></span>
                <span className="text-gray-500 text-sm">500+ enrolled</span>
              </div>

              {/* Mobile-Only Video Card (Visible only on mobile/tablet, hidden on desktop) */}
              <div className="w-full block lg:hidden mb-8">
                <div 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 cursor-pointer group/video aspect-video flex items-center justify-center border border-gray-100"
                >
                  {/* Video cover / thumbnail */}
                  <img 
                    src="Hero/Hero Sec.jpeg" 
                    alt="IELTS Masterclass Video Preview" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                  />
                  {/* Ambient vignette and overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover/video:bg-black/25 transition-colors duration-300"></div>
                  {/* Big Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative hover:scale-110 active:scale-95 transition-transform duration-300">
                      <div className="absolute inset-0 bg-brand-red rounded-full animate-ping opacity-60"></div>
                      <button className="relative bg-[#9c080a] text-white w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-[0_0_45px_rgba(156,8,10,0.75)] focus:outline-none animate-none">
                        <svg className="w-6 h-6 sm:w-9 sm:h-9 ml-1 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Custom "Play Trailer" Button (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-2 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-semibold border border-white/10 shadow-lg hover:bg-black/80 transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Play Trailer</span>
                  </div>
                </div>
              </div>

              {/* Avatars */}
              <div className="flex flex-col items-center lg:flex-row lg:items-center gap-3.5 mb-8 w-full justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white shadow-md" src={zunairaDp} alt="Dr. Zunaira" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white shadow-md" src={ahsanDp} alt="Ahsan Abdali" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white shadow-md" src={yumnaDp} alt="Yumna Shahid" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#9c080a] text-white flex items-center justify-center text-[10px] font-extrabold shadow-md">
                    +500
                  </div>
                </div>
                <div className="text-gray-700 text-xs sm:text-sm text-center lg:text-left">
                  <span className="font-bold">Ahsan Abdali</span>, <span className="font-bold">Dr. Zunaira</span> & <a href="#testimonials" className="underline hover:text-brand-red text-[#002966] font-bold transition-colors">500+ graduates</a>
                </div>
              </div>

              {/* Bottom Pills Box */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 p-5 sm:p-6 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-100/70 w-full sm:w-auto">
                {/* Academic & General */}
                <div className="flex items-center gap-2.5 text-[#002966] text-sm sm:text-base font-bold">
                  <svg className="w-5 h-5 text-[#002966]/70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h1.5v9H3v-9zM7.5 7.5H9v12H7.5v-12zM12 4.5h1.5v15H12v-15zM16.5 1.5H18v18h-1.5v-18z" />
                  </svg>
                  <span>Academic & General</span>
                </div>

                <span className="hidden md:inline h-6 w-px bg-gray-200"></span>

                {/* English */}
                <div className="flex items-center gap-2.5 text-[#002966] text-sm sm:text-base font-bold">
                  <svg className="w-5 h-5 text-[#002966]/70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099 1.533.284-2.253" />
                  </svg>
                  <span>English</span>
                </div>

                <span className="hidden md:inline h-6 w-px bg-gray-200"></span>

                {/* IELTS Prep */}
                <div className="flex items-center gap-2.5 text-[#002966] text-sm sm:text-base font-bold">
                  <svg className="w-5 h-5 text-[#002966]/70" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  <span>IELTS Prep</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop-Only Video Column */}
            <motion.div variants={fadeUp} className="hidden lg:block lg:col-span-6 w-full">
              <div 
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 cursor-pointer group/video aspect-video flex items-center justify-center border border-gray-100"
              >
                {/* Video cover / thumbnail */}
                <img 
                  src="Hero/Hero Sec.jpeg" 
                  alt="IELTS Masterclass Video Preview" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                />

                {/* Ambient vignette and overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover/video:bg-black/25 transition-colors duration-300"></div>

                {/* Big Centered Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative hover:scale-110 active:scale-95 transition-transform duration-300">
                    <div className="absolute inset-0 bg-brand-red rounded-full animate-ping opacity-60"></div>
                    <button className="relative bg-[#9c080a] text-white w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-[0_0_45px_rgba(156,8,10,0.75)] focus:outline-none">
                      <svg className="w-6 h-6 sm:w-9 sm:h-9 ml-1 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Custom "Play Trailer" Button (Bottom Left) */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-2 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-semibold border border-white/10 shadow-lg hover:bg-black/80 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Play Trailer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* The Real Problem Section */}
        <section 
          className="min-h-fit md:min-h-screen md:flex md:flex-col md:items-center md:justify-center py-10 md:py-24 px-4 sm:px-6 md:p-12 bg-gray-50 snap-start relative"
        >
          <div className="w-full max-w-6xl mx-auto relative">
            {/* Header Area */}
            <div className="w-full text-center mb-12">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-bold text-[#002966] tracking-widest uppercase mb-6 shadow-sm">
                  <svg className="w-4 h-4 text-[#002966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  The Real Problem
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002966] mb-4 tracking-tight">
                  The Cycle That Keeps You <span className="text-[#9c080a] italic">Stuck</span>
                </h2>
              </motion.div>
            </div>

            {/* 2-Column Container (Stack on mobile, Grid on desktop) */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 w-full"
            >

              {/* Left Column - Why Students Fail */}
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-[#002966] p-6 md:p-8 text-white flex gap-4 items-center">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-extrabold tracking-widest mb-1 uppercase">Why Students Fail</div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight whitespace-nowrap">Why Most Students Stay Stuck</h3>
                  </div>
                </div>

                <div className="flex-1 p-0 flex flex-col">
                  {[
                    {
                      num: "01",
                      title: "Following random YouTube strategies",
                      desc: "No structure, no system — just scattered tips that contradict each other.",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      )
                    },
                    {
                      num: "02",
                      title: "Writing complex answers that don't score",
                      desc: "Trying to impress examiners with complexity instead of clarity.",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      )
                    },
                    {
                      num: "03",
                      title: "Booking the test too early",
                      desc: "Sitting the exam before the preparation is genuinely complete.",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      )
                    },
                    {
                      num: "04",
                      title: "No clear feedback on mistakes",
                      desc: "Practising in the dark — repeating the same errors with no one to correct them.",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                      )
                    }
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 p-5 md:p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                      <div className="text-gray-200 font-extrabold text-2xl md:text-3xl shrink-0 w-8">{item.num}</div>
                      <div className="bg-blue-50/50 p-2 md:p-2.5 rounded-xl h-fit shrink-0 text-[#002966]">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002966] mb-1.5 text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  {/* Footer Note */}
                  <div className="p-5 md:p-6 bg-gray-50/50 mt-auto flex gap-3 items-center text-xs md:text-sm text-gray-500 border-t border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-[#002966] shrink-0"></div>
                    Sound familiar? You're not alone — and it's fixable.
                  </div>
                </div>
              </motion.div>

              {/* Right Column - The Hidden Price */}
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-black p-6 md:p-8 text-white flex gap-4 items-center">
                  <div className="bg-[#9c080a] p-2.5 rounded-xl shrink-0 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#9c080a] text-xs font-extrabold tracking-widest mb-1 uppercase">The Hidden Price</div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold leading-tight whitespace-nowrap">What Poor Preparation Really Costs</h3>
                  </div>
                </div>

                <div className="flex-1 p-0 flex flex-col">
                  {[
                    { tag: "MONEY", desc: "Another exam fee wasted" },
                    { tag: "TIME", desc: "Another 2–3 months delayed" },
                    { tag: "CAREER", desc: "Another admission deferred" },
                    { tag: "VISA", desc: "Another visa appointment you can't book" },
                    { tag: "MENTAL", desc: "Another hit to your confidence and self-worth" },
                    { tag: "FAMILY", desc: "Another round of explaining to the family why you're still stuck" }
                  ].map((item) => (
                    <div key={item.tag} className="flex items-center gap-3 md:gap-4 p-4 md:p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                      <div className="bg-[#9c080a]/10 text-[#9c080a] px-2 md:px-3 py-1.5 rounded-md text-[10px] md:text-xs font-bold tracking-widest w-16 md:w-20 text-center shrink-0 border border-[#9c080a]/20">
                        {item.tag}
                      </div>
                      <div className="font-bold text-gray-800 text-xs md:text-sm flex-1">
                        {item.desc}
                      </div>
                      <div className="text-gray-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </div>
                    </div>
                  ))}

                  {/* Footer Note */}
                  <div className="p-5 md:p-6 bg-[#fffcfc] mt-auto flex gap-3 items-center text-xs md:text-sm text-gray-500 border-t border-[#9c080a]/10">
                    <div className="w-2 h-2 rounded-full bg-[#9c080a] shrink-0"></div>
                    Every retake multiplies every one of these costs.
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section 
          id="stats" 
          className="min-h-fit md:min-h-screen md:flex md:flex-col md:items-center md:justify-center py-10 md:py-24 px-4 sm:px-6 md:p-12 bg-white snap-start relative"
        >
          <div className="w-full max-w-5xl mx-auto relative">
            {/* Header Area */}
            <div className="w-full text-center mb-10 md:mb-14">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#002966] tracking-tight">
                  Numbers Don't <span className="text-[#9c080a] italic">Lie</span>
                </h2>
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Stats Grid */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white rounded-2xl md:rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 mb-8 md:mb-10">
              {/* Item 1 */}
              <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14v6"></path>
                </svg>
                <div className="text-4xl md:text-5xl font-extrabold text-[#002966] mt-5 mb-2 flex items-center">
                  <CountUp end={500} duration={2000} /><span className="text-[#9c080a] font-bold text-3xl ml-1">+</span>
                </div>
                <p className="text-sm text-gray-500 font-medium px-2">Students trained and counting</p>
              </div>

              {/* Item 2 */}
              <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-4xl md:text-5xl font-extrabold text-[#002966] mt-5 mb-2 flex items-center">
                  <CountUp end={1.5} decimals={1} duration={2000} /> <span className="text-[#9c080a] font-bold text-lg md:text-xl ml-2">Bands</span>
                </div>
                <p className="text-sm text-gray-500 font-medium px-2">Average band score improvement per student</p>
              </div>

              {/* Item 3 */}
              <div className="p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
                <div className="text-4xl md:text-5xl font-extrabold text-[#002966] mt-5 mb-2 flex items-baseline">
                  <CountUp end={4.9} decimals={1} duration={2000} /><span className="text-[#9c080a] font-bold text-2xl md:text-3xl">/5</span>
                </div>
                <p className="text-sm text-gray-500 font-medium px-2">Google Rating from verified students</p>
              </div>

              {/* Item 4 */}
              <div className="p-8 flex flex-col items-center text-center hover:bg-gray-50 active:bg-gray-50 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <div className="text-4xl md:text-5xl font-extrabold text-[#002966] mt-5 mb-2 flex items-center">
                  <CountUp end={10} duration={2000} /><span className="text-[#9c080a] font-bold text-2xl md:text-3xl ml-1">+ <span className="text-xl">Yrs</span></span>
                </div>
                <p className="text-sm text-gray-500 font-medium px-2">Of expertise in IELTS preparation</p>
              </div>
            </motion.div>

              {/* Bottom Banner */}
              <motion.div variants={fadeUp} className="bg-[#002966] rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                  <div className="bg-white/10 p-3 md:p-4 rounded-2xl shadow-inner text-white flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8a4 4 0 1 0 0 8 4 4 0 0 0 2.828-1.172l6.344-6.344A4 4 0 1 1 20 16a4 4 0 0 1-2.828-1.172l-6.344-6.344A4 4 0 0 0 8 8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Immeasurable</h3>
                    <p className="text-blue-100 text-sm md:text-base font-medium">Stress avoided — because the right preparation means you only do this once.</p>
                  </div>
                </div>
                <button className="px-8 py-3 rounded-xl bg-white text-[#002966] font-bold tracking-widest text-sm uppercase hover:bg-blue-50 active:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 shadow-md">
                  PRICELESS
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Myths Section */}
        <section 
          id="myths" 
          className="min-h-fit md:min-h-screen md:flex md:flex-col md:justify-center py-10 md:py-24 bg-gray-50 snap-start relative"
        >
          <div className="w-full relative">
            {/* Header Area */}
            <div className="w-full text-center mb-12">
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center flex flex-col items-center">
                  <h3 className="text-3xl md:text-5xl font-extrabold text-[#002966] leading-tight">
                    What Students Get Wrong <br className="hidden md:block" />
                    About <span className="text-[#9c080a] relative inline-block">IELTS Preparation<div className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-2 bg-[#9c080a] opacity-20"></div></span>
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Myths Slider Container */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative mt-4 group/slider overflow-hidden"
            >
              {/* Fade masks for smooth entry/exit */}
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              <div
                onMouseEnter={() => setIsSliderPaused(true)}
                onMouseLeave={() => setIsSliderPaused(false)}
                onTouchStart={() => setIsSliderPaused(true)}
                onTouchEnd={() => setIsSliderPaused(false)}
                onTouchCancel={() => setIsSliderPaused(false)}
                className="flex w-max animate-scroll-2 cursor-pointer"
                style={{ animationPlayState: isSliderPaused ? 'paused' : 'running' }}
              >
                {/* Original Set */}
                <div className="flex gap-6 md:gap-8 px-3 md:px-4 w-max">
                  {mythsData.map((myth, index) => (
                    <div key={`orig-${index}`} className="w-[85vw] sm:w-[350px] md:w-[400px] h-full bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 active:-translate-y-2 transition-transform duration-300 group shrink-0">
                      <div className="text-gray-200 font-extrabold text-5xl mb-4 group-hover:text-[#9c080a]/20 group-active:text-[#9c080a]/20 transition-colors">Myths</div>
                      <h4 className="text-xl font-bold text-[#9c080a] mb-4 italic leading-snug min-h-[3.5rem] sm:min-h-[4rem] flex items-start">"{myth.title}"</h4>
                      <div className="w-12 h-1 bg-gray-100 mb-4 group-hover:bg-[#002966] group-active:bg-[#002966] transition-colors shrink-0"></div>
                      <div className="flex-1 flex flex-col justify-start">
                        <h5 className="text-[#002966] font-bold text-sm uppercase tracking-widest mb-2">Reality</h5>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {myth.reality}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Duplicated Set for Infinite Loop */}
                <div className="flex gap-6 md:gap-8 px-3 md:px-4 w-max">
                  {mythsData.map((myth, index) => (
                    <div key={`dup-${index}`} className="w-[85vw] sm:w-[350px] md:w-[400px] h-full bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col hover:-translate-y-2 active:-translate-y-2 transition-transform duration-300 group shrink-0">
                      <div className="text-gray-200 font-extrabold text-5xl mb-4 group-hover:text-[#9c080a]/20 group-active:text-[#9c080a]/20 transition-colors">Myths</div>
                      <h4 className="text-xl font-bold text-[#9c080a] mb-4 italic leading-snug min-h-[3.5rem] sm:min-h-[4rem] flex items-start">"{myth.title}"</h4>
                      <div className="w-12 h-1 bg-gray-100 mb-4 group-hover:bg-[#002966] group-active:bg-[#002966] transition-colors shrink-0"></div>
                      <div className="flex-1 flex flex-col justify-start">
                        <h5 className="text-[#002966] font-bold text-sm uppercase tracking-widest mb-2">Reality</h5>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {myth.reality}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          id="how-it-works" 
          className="min-h-fit md:min-h-screen py-10 md:py-24 px-4 sm:px-6 bg-[#f8f9fa] snap-start relative md:flex md:flex-col md:justify-center"
        >
          <div className="w-full max-w-5xl mx-auto relative md:flex md:flex-col md:gap-8 md:items-center">
            {/* Sticky Header Column */}
            <div className="w-full text-center mb-6">
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002966] leading-[1.15] tracking-tight">
                  <span className="whitespace-nowrap">Your Journey</span> <br /> <span className="whitespace-nowrap">With <span className="text-[#9c080a] italic">Mindful</span></span>
                </h2>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="w-full">
              {/* Main Journey Card */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 mb-6 border border-gray-100"
              >
                {/* Phase 1 */}
                <motion.div variants={fadeUp} className="bg-[#002966] text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-6 tracking-widest uppercase shadow-sm">
                  Phase 1 — Preparation
                </motion.div>

                <div className="space-y-0">
                  {[
                    { num: 1, title: "Start with a Diagnostic", desc: "We identify exactly where you are." },
                    { num: 2, title: "Get Your Expert Guidance Plan", desc: "A roadmap built for your band target." },
                    { num: 3, title: "Skill-Specific Training", desc: "Reading, Writing, Listening, Speaking — all with strategy." },
                    { num: 4, title: "Continuous Feedback", desc: "Every attempt reviewed and corrected." },
                    { num: 5, title: "Final Mock Exam", desc: "A real simulation before the real thing." },
                    { num: 6, title: "Test Readiness Signal", desc: "We tell you clearly — are you ready or not?" }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.num} 
                      initial="inactive"
                      whileInView="active"
                      viewport={{ once: true, margin: "-40% 0px -40% 0px", amount: 0.2 }}
                      className="relative"
                    >
                      <div className="flex gap-4 md:gap-6 items-start py-4">
                        <motion.div 
                          variants={{
                            inactive: {
                              scale: 0.9,
                              backgroundColor: "#f3f4f6",
                              color: "#9ca3af",
                              boxShadow: "0 0 0 0px rgba(0,0,0,0)"
                            },
                            active: {
                              scale: 1.05,
                              backgroundColor: "#002966",
                              color: "#ffffff",
                              boxShadow: "0 10px 15px -3px rgba(0, 41, 102, 0.2)"
                            }
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-md"
                        >
                          {item.num}
                        </motion.div>
                        <div className="flex-1 pb-4">
                          <motion.h4 
                            variants={{
                              inactive: { color: "#9ca3af" },
                              active: { color: "#002966" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="font-extrabold text-base md:text-lg mb-1"
                          >
                            {item.title}
                          </motion.h4>
                          <motion.p 
                            variants={{
                              inactive: { color: "#d1d5db" },
                              active: { color: "#6b7280" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-sm"
                          >
                            {item.desc}
                          </motion.p>
                        </div>
                      </div>
                      {/* Divider except after 6 */}
                      {index < 5 && <div className="absolute bottom-0 left-[3rem] md:left-[4rem] right-0 h-px bg-gray-100"></div>}
                    </motion.div>
                  ))}

                  {/* Readiness Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-0 sm:ml-[3rem] md:ml-[4rem] mt-2 mb-8">
                    <div className="border border-green-200 bg-green-50/50 rounded-xl p-4 flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 text-green-700 font-bold">
                        <div className="bg-green-500 text-white rounded-full p-0.5 shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        Ready?
                      </div>
                      <p className="text-xs text-green-800/80 leading-relaxed">Move to Step 7 and book with confidence.</p>
                    </div>
                    <div className="border border-[#9c080a]/20 bg-[#9c080a]/5 rounded-xl p-4 flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 text-[#9c080a] font-bold">
                        <div className="bg-[#9c080a] text-white rounded-full p-0.5 shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                        Not ready?
                      </div>
                      <p className="text-xs text-[#9c080a]/80 leading-relaxed">Loop back to Step 3 for targeted training.</p>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-green-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full inline-block mt-4 mb-6 tracking-widest uppercase shadow-sm shadow-green-600/20">
                  Phase 2 — Exam
                </div>

                <div className="space-y-0">
                  {[
                    { num: 7, title: "Book Your Test with Confidence", desc: "You know you're ready. No second-guessing." },
                    { num: 8, title: "Achieve Your Desired Score", desc: "No retakes. No wasted money. Just results." }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.num} 
                      initial="inactive"
                      whileInView="active"
                      viewport={{ once: true, margin: "-40% 0px -40% 0px", amount: 0.2 }}
                      className="relative"
                    >
                      <div className="flex gap-4 md:gap-6 items-start py-4">
                        <motion.div 
                          variants={{
                            inactive: {
                              scale: 0.9,
                              backgroundColor: "#f3f4f6",
                              color: "#9ca3af",
                              boxShadow: "0 0 0 0px rgba(0,0,0,0)"
                            },
                            active: {
                              scale: 1.05,
                              backgroundColor: "#002966",
                              color: "#ffffff",
                              boxShadow: "0 10px 15px -3px rgba(0, 41, 102, 0.2)"
                            }
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-md"
                        >
                          {item.num}
                        </motion.div>
                        <div className="flex-1 pb-4">
                          <motion.h4 
                            variants={{
                              inactive: { color: "#9ca3af" },
                              active: { color: "#002966" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="font-extrabold text-base md:text-lg mb-1"
                          >
                            {item.title}
                          </motion.h4>
                          <motion.p 
                            variants={{
                              inactive: { color: "#d1d5db" },
                              active: { color: "#6b7280" }
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-sm"
                          >
                            {item.desc}
                          </motion.p>
                        </div>
                      </div>
                      {/* Divider except after 8 */}
                      {index < 1 && <div className="absolute bottom-0 left-[3rem] md:left-[4rem] right-0 h-px bg-gray-100"></div>}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Target Banner */}
              <motion.div 
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#002966] rounded-[1.5rem] p-6 md:p-8 flex items-center gap-4 md:gap-6 shadow-xl w-full"
              >
                <div className="bg-white/10 p-3 md:p-4 rounded-2xl shadow-inner text-white flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white mb-1">One Attempt. Band 7+. Done.</h4>
                  <p className="text-blue-100 text-sm md:text-base font-medium">This is what the entire journey is designed to deliver.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section 
          id="eligibility" 
          className="min-h-fit md:min-h-screen md:flex md:flex-col md:items-center md:justify-center py-10 md:py-24 px-4 sm:px-6 md:p-12 bg-white snap-start relative"
        >
          <div className="w-full max-w-5xl mx-auto relative">
            {/* Header */}
            <div className="w-full text-center mb-12">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-bold text-[#002966] tracking-widest uppercase mb-6 shadow-sm">
                  <svg className="w-4 h-4 text-[#002966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Eligibility
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002966] mb-4 tracking-tight">
                  Who is <span className="text-[#9c080a] italic">eligible?</span>
                </h2>
              </motion.div>
            </div>

            {/* 1-Column Container (Stacked) */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-8 pb-6 w-full max-w-3xl mx-auto"
            >

              {/* Top Card - Built for You */}
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-[#002966] p-6 md:p-8 text-white flex gap-4 items-center">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 shrink-0">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">This Program Is Built for You If:</h3>
                  </div>
                </div>

                <div className="flex-1 p-0 flex flex-col">
                  {[
                    <>You need <span className="font-bold text-[#002966]">7+</span> for your University Application.</>,
                    <>You’re a <span className="font-bold text-[#002966]">working professional</span> balancing time.</>,
                    <>You need specific scores for your <span className="font-bold text-[#002966]">Canada or Australia</span> Immigration.</>,
                    <>You cannot afford <span className="font-bold text-[#002966]">wasting time</span> and 2nd attempt exam fee.</>,
                    <>You prefer <span className="font-bold text-[#002966]">structured guidance</span> over guesswork.</>,
                    <>You need <span className="font-bold text-[#002966]">high accountability</span> & motivation.</>,
                    <>You’ve taken the <span className="font-bold text-[#002966]">IELTS before</span> and want a <span className="font-bold text-[#002966]">stronger score</span>.</>
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 md:p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                      <div className="bg-green-50 text-green-600 p-1 rounded-full h-fit shrink-0 mt-0.5 border border-green-100">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <div className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Card - Not Right for You */}
              <motion.div variants={fadeUp} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-black p-6 md:p-8 text-white flex gap-4 items-center">
                  <div className="bg-[#9c080a]/20 p-2.5 rounded-xl border border-[#9c080a]/30 shrink-0 text-[#9c080a]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold leading-tight">This Path Is Not Right for You If…</h3>
                  </div>
                </div>

                <div className="flex-1 p-0 flex flex-col">
                  {[
                    <>You need <span className="font-bold text-[#9c080a]">shortcuts</span> instead of clarity.</>,
                    <>You need a <span className="font-bold text-[#9c080a]">last-minute crash course</span> rather than proper preparation.</>,
                    <>You need to book your <span className="font-bold text-[#9c080a]">test immediately</span>, with no time to prepare properly.</>
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 md:p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 active:bg-gray-50 transition-colors">
                      <div className="bg-red-50 text-[#9c080a] p-1 rounded-full h-fit shrink-0 mt-0.5 border border-red-100">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </div>
                      <div className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Full Width Moving Ribbon */}
          <div className="absolute bottom-0 left-0 w-full bg-[#002966] py-3 md:py-4 overflow-hidden z-10 flex">
            <div 
              onMouseEnter={() => setIsRibbonPaused(true)}
              onMouseLeave={() => setIsRibbonPaused(false)}
              onTouchStart={() => setIsRibbonPaused(true)}
              onTouchEnd={() => setIsRibbonPaused(false)}
              onTouchCancel={() => setIsRibbonPaused(false)}
              className="flex w-max animate-scroll-3 cursor-pointer"
              style={{ animationPlayState: isRibbonPaused ? 'paused' : 'running' }}
            >
              {/* Set 1 */}
              <div className="flex items-center gap-8 md:gap-12 px-4 md:px-6 w-max">
                {[
                  "BAND 7+ SUCCESS STORIES",
                  "FIRST ATTEMPT SUCCESS RATE",
                  "MONEY-BACK GUARANTEE",
                  "EXPERT GUIDANCE"
                ].map((text, idx) => (
                  <React.Fragment key={`ribbon-orig-${idx}`}>
                    <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase whitespace-nowrap">{text}</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-[#9c080a] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                  </React.Fragment>
                ))}
              </div>
              {/* Set 2 */}
              <div className="flex items-center gap-8 md:gap-12 px-4 md:px-6 w-max">
                {[
                  "BAND 7+ SUCCESS STORIES",
                  "FIRST ATTEMPT SUCCESS RATE",
                  "MONEY-BACK GUARANTEE",
                  "EXPERT GUIDANCE"
                ].map((text, idx) => (
                  <React.Fragment key={`ribbon-dup-${idx}`}>
                    <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase whitespace-nowrap">{text}</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-[#9c080a] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                  </React.Fragment>
                ))}
              </div>
              {/* Set 3 */}
              <div className="flex items-center gap-8 md:gap-12 px-4 md:px-6 w-max">
                {[
                  "BAND 7+ SUCCESS STORIES",
                  "FIRST ATTEMPT SUCCESS RATE",
                  "MONEY-BACK GUARANTEE",
                  "EXPERT GUIDANCE"
                ].map((text, idx) => (
                  <React.Fragment key={`ribbon-tri-${idx}`}>
                    <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase whitespace-nowrap">{text}</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-[#9c080a] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section 
          id="gallery" 
          className="min-h-fit md:min-h-screen md:flex md:flex-col md:items-center md:justify-center py-10 md:py-24 px-4 sm:px-6 md:p-12 bg-gray-50 snap-start relative"
        >
          <div className="w-full max-w-6xl mx-auto relative">
            {/* Header */}
            <div className="w-full text-center mb-12">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-bold text-[#002966] tracking-widest uppercase mb-6 shadow-sm">
                  <svg className="w-4 h-4 text-[#002966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Success Stories
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                  <span className="text-[#002966]">Real</span> <span className="text-[#9c080a]">Classes.</span> <br className="md:hidden" />
                  <span className="text-[#002966]">Real</span> <span className="text-[#9c080a]">Guidance.</span> <br className="md:hidden" />
                  <span className="text-[#002966]">Real</span> <span className="text-[#9c080a]">Interaction</span>
                </h2>
              </motion.div>
            </div>

            {/* Gallery Carousel Container */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative mt-8"
            >
              <Carousel>
                {galleryImages.map((img, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActivePhotoIndex(index)}
                    className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] aspect-[4/3] shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:shadow-xl active:shadow-xl snap-start relative flex items-center justify-center cursor-pointer group/card"
                  >
                    {/* Blurred background image for premium aesthetic fill */}
                    <img
                      src={img.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover filter blur-md opacity-25 scale-110 pointer-events-none"
                    />
                    {/* Main fully visible image */}
                    <div className="absolute inset-0 flex items-center justify-center p-2 z-10">
                      <img
                        src={img.src}
                        alt={`Gallery image ${index + 1}`}
                        className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 group-hover/card:scale-[1.03] group-active/card:scale-[1.03]"
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section 
          id="testimonials" 
          className="min-h-fit md:min-h-screen md:flex md:flex-col md:items-center md:justify-center py-10 md:py-24 px-4 sm:px-6 md:p-12 bg-white snap-start relative"
        >
          {/* Subtle wave background like the reference image */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002966 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="w-full max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="w-full text-center mb-10 md:mb-12">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center flex flex-col items-center w-full px-2 overflow-hidden"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002966] tracking-tight relative inline-block">
                  Students Like You Have <br className="sm:hidden" /> <span className="text-[#9c080a] italic">Already Done It</span>
                </h2>
              </motion.div>
            </div>

            {/* Stats Counter */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full max-w-5xl mx-auto bg-white rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 py-8 px-4 md:px-10 mb-12 flex flex-wrap md:flex-nowrap justify-center md:justify-around items-center gap-y-8 gap-x-4 relative z-20"
            >
              <div className="flex flex-col items-center w-[45%] md:w-auto">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#002966] mb-1 tracking-tight">
                  <AnimatedCounter end={3} suffix=" weeks" />
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">Fastest success</span>
              </div>
              <div className="flex flex-col items-center w-[45%] md:w-auto">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#002966] mb-1 tracking-tight">
                  <AnimatedCounter end={9} />
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">Highest band achieved</span>
              </div>
              <div className="flex flex-col items-center w-[45%] md:w-auto">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#002966] mb-1 tracking-tight">
                  <AnimatedCounter end={7.5} decimals={1} />
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">Most common result</span>
              </div>
              <div className="flex flex-col items-center w-[45%] md:w-auto">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#002966] mb-1 tracking-tight">
                  <AnimatedCounter end={1} suffix="st" />
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">Attempt success rate</span>
              </div>
            </motion.div>

            {/* Testimonials Carousel Container */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full relative mt-8"
            >
              <Carousel>
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className="w-[85vw] sm:w-[480px] md:w-[600px] shrink-0 bg-white border border-gray-100 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-xl hover:-translate-y-2 active:-translate-y-2 transition-all duration-300 snap-start">

                    {/* Text Content */}
                    <div className="flex-1 p-8 flex flex-col text-left relative">
                      <div className="absolute top-6 right-6 opacity-[0.03]">
                        <svg className="w-20 h-20 text-[#002966]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                      </div>
                      <div className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-6 italic z-10 relative flex-1">
                        "{testimonial.text}"
                      </div>
                      <div className="mt-auto z-10 relative">
                        <h4 className="text-lg md:text-xl font-extrabold text-[#002966] mb-1">{testimonial.name}</h4>
                        <p className="text-[#9c080a] font-bold text-xs md:text-sm tracking-wide uppercase">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full h-32 md:h-auto md:w-[200px] shrink-0 flex items-center justify-center p-4 md:p-6 border-t md:border-t-0 md:border-l border-gray-100">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md border-4 border-white shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className={`w-full h-full object-cover ${testimonial.objectPosition || 'object-top'}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section 
          id="comparison" 
          className="min-h-fit md:min-h-screen py-10 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8fbff] snap-start relative"
        >
          <div className="max-w-6xl mx-auto relative">
            {/* Header */}
            <div className="w-full text-center mb-6">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight flex flex-col items-center gap-2">
                  <span className="text-[#002966]">Traditional Coaching</span>
                  <span className="text-gray-800 font-semibold text-xl md:text-4xl">vs</span>
                  <span className="text-[#9c080a]">Mindful Experience</span>
                </h2>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                <div className="bg-white border border-gray-200 rounded-full px-4 md:px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-[#002966] shadow-sm flex items-center gap-2">
                  <span className="text-gray-400">⨯</span> Common pitfalls
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-4 md:px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-[#002966] shadow-sm flex items-center gap-2">
                  <span className="text-[#9c080a]">✓</span> Mindful advantage
                </div>
                <div className="bg-white border border-gray-200 rounded-full px-4 md:px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-[#002966] shadow-sm flex items-center gap-2">
                  <span className="text-[#9c080a]">✓</span> Money Back Guaranteed
                </div>
              </div>
            </motion.div>

            {/* Desktop Table View */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="hidden lg:block bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative z-10"
            >
              {/* Table Header */}
              <div className="grid grid-cols-[1fr_1.3fr_1.6fr] text-white">
                <div className="bg-[#001f4d] p-6"></div>
                <div className="bg-[#002966] p-6 flex items-center justify-center text-lg font-semibold tracking-wide">
                  Common Student Experience
                </div>
                <div className="bg-[#9c080a] p-6 flex items-center justify-center text-lg font-semibold tracking-wide">
                  Mindful Experience
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-blue-50">
                {comparisonData.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-[1fr_1.3fr_1.6fr] hover:bg-gray-50/50 active:bg-gray-50/50 transition-colors">
                    <div className="p-5 flex items-center text-[#002966] font-semibold text-[15px] whitespace-nowrap">
                      {row.feature}
                    </div>
                    <div className="p-5 flex items-center gap-3 text-gray-500 font-medium whitespace-nowrap border-x border-gray-50 text-[15px]">
                      <span className="text-gray-300 font-bold shrink-0">⨯</span> {row.trad}
                    </div>
                    <div className="p-5 flex items-center gap-3 text-[#9c080a] font-semibold whitespace-nowrap text-[15px]">
                      <span className="text-[#9c080a] font-bold shrink-0">✓</span> {row.mindful}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Card View */}
            <motion.div 
              variants={staggerContainer} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:hidden flex flex-col gap-5"
            >
              {comparisonData.map((row, idx) => (
                <motion.div variants={fadeUp} key={`mob-${idx}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-[#002966] px-5 py-3 text-white font-bold tracking-wide text-sm">
                    {row.feature}
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                      <span className="text-gray-300 font-bold text-base leading-none mt-0.5">⨯</span>
                      <span className="leading-snug">{row.trad}</span>
                    </div>
                    <div className="h-px bg-gray-100 w-full"></div>
                    <div className="flex items-start gap-3 text-[#9c080a] text-sm font-bold">
                      <span className="text-[#9c080a] font-bold text-base leading-none mt-0.5">✓</span>
                      <span className="leading-snug">{row.mindful}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-12 text-center text-gray-600 font-medium italic md:text-lg px-4"
            >
              We don't just teach — we guide you through the entire journey.
            </motion.div>
          </div>
        </section>

        {/* Course Captain Section */}
        <section 
          id="captain" 
          className="min-h-fit md:min-h-screen py-10 md:py-24 px-4 sm:px-6 md:px-12 bg-white snap-start relative flex flex-col justify-center items-center"
        >
          <div className="w-full max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="w-full text-center mb-8">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#002966]">
                  Meet Your <span className="text-[#9c080a]">Course Captain</span>
                </h2>
              </motion.div>
            </div>

            {/* Tab navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-[#f2f7fc] rounded-full border border-blue-50/50 shadow-xs gap-1">
                {[
                  { id: 'profile', label: 'Instructor Profile' },
                  { id: 'certifications', label: 'Credentials & Certs' },
                  { id: 'reviews', label: 'WhatsApp Feedback' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCaptainTab(tab.id)}
                    className={`relative px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                      captainTab === tab.id
                        ? 'bg-[#002966] text-white shadow-md'
                        : 'text-[#002966] hover:bg-blue-100/50 active:bg-blue-100/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {captainTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {/* Main Card */}
                  <div className="bg-[#f2f7fc] rounded-[2rem] md:rounded-[3rem] shadow-sm border border-blue-50 overflow-hidden relative">
                    <div className="flex flex-col-reverse lg:flex-row">
                      {/* Left Content */}
                      <div className="flex-1 p-6 sm:p-8 md:p-12 xl:p-14 flex flex-col justify-center text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#002966] mb-2">Hussain Qaizar</h3>
                        <p className="text-[#9c080a] font-medium text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                          IELTS Instructor & Career Mentor — 10+ Years Experience
                        </p>

                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-xl">
                          Cambridge Certified IELTS expert specializing in first-time test takers. Known for deeply personal guidance, real career counseling, and a teaching style that makes IELTS feel manageable and achievable — no matter your starting point.
                        </p>

                        {/* Pills */}
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-[#002966] shadow-xs flex items-center">
                            <span className="text-gray-300 mr-2 text-xs">🎓</span> Cambridge Certified
                          </div>
                          <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-[#002966] shadow-xs flex items-center">
                            <span className="text-gray-300 mr-2 text-xs">⭐</span> First-Time IELTS Specialist
                          </div>
                          <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-[#002966] shadow-xs flex items-center">
                            <span className="text-gray-300 mr-2 text-xs">🤝</span> Personal Guidance
                          </div>
                          <div className="bg-white px-3 py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm font-medium text-[#002966] shadow-xs flex items-center">
                            <span className="text-gray-300 mr-2 text-xs">💼</span> Career Counseling
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8 border-b border-blue-100/60 pb-6 sm:pb-8">
                          <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002966] mb-1">
                              <AnimatedCounter end={10} suffix="+" />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">years of teaching experience</div>
                          </div>
                          <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002966] mb-1">
                              <AnimatedCounter end={4} />
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">countries served</div>
                          </div>
                        </div>

                        {/* Community */}
                        <div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#002966] mb-3">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white"></span>
                            </span>
                            Student Community Across:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2.5 py-1 bg-blue-100/60 text-[#002966] text-[10px] sm:text-xs font-bold rounded-full border border-blue-200/50 tracking-wide flex items-center gap-1.5">
                              <img src={flagPk} alt="Pakistan" className="w-4 h-3 object-cover rounded-xs" />
                              Pakistan
                            </span>
                            <span className="px-2.5 py-1 bg-blue-100/60 text-[#002966] text-[10px] sm:text-xs font-bold rounded-full border border-blue-200/50 tracking-wide flex items-center gap-1.5">
                              <img src={flagIn} alt="India" className="w-4 h-3 object-cover rounded-xs" />
                              India
                            </span>
                            <span className="px-2.5 py-1 bg-blue-100/60 text-[#002966] text-[10px] sm:text-xs font-bold rounded-full border border-blue-200/50 tracking-wide flex items-center gap-1.5">
                              <img src={flagAe} alt="UAE" className="w-4 h-3 object-cover rounded-xs" />
                              UAE
                            </span>
                            <span className="px-2.5 py-1 bg-blue-100/60 text-[#002966] text-[10px] sm:text-xs font-bold rounded-full border border-blue-200/50 tracking-wide flex items-center gap-1.5">
                              <img src={flagSa} alt="Saudi Arabia" className="w-4 h-3 object-cover rounded-xs" />
                              Saudi Arabia
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Image */}
                      <div className="lg:w-[42%] relative min-h-[320px] sm:min-h-[400px] lg:min-h-auto overflow-hidden">
                        <img 
                          src={captainImg} 
                          alt="Hussain Qaizar" 
                          className="absolute inset-0 w-full h-full object-cover object-top" 
                        />
                      </div>
                    </div>

                    {/* Footer Banner */}
                    <div className="bg-[#001f4d] text-white p-4 sm:p-6 text-center text-xs sm:text-sm md:text-base font-medium italic relative z-20">
                      Hussain holds certifications from Cambridge English (ICD), Pearson Pathways (PTE Academic), and Preply — bringing world-class credentials to every lesson!
                    </div>
                  </div>
                </motion.div>
              )}

              {captainTab === 'certifications' && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="text-center mb-6 max-w-2xl mx-auto">
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      Hussain holds verified, world-class teaching credentials from globally recognized institutions, ensuring premium quality instruction.
                    </p>
                  </div>
                  {/* Certificates Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Cert 1 */}
                    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg active:shadow-lg transition-shadow group flex flex-col">
                      <div className="w-full bg-gray-50/50 flex items-center justify-center overflow-hidden h-40 sm:h-48 p-4">
                        <img src={certIelts} alt="IELTS Certificate" className="w-full h-full object-contain group-hover:scale-[1.03] group-active:scale-[1.03] transition-transform duration-500" />
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center border-t border-gray-50 text-left">
                        <div className="font-extrabold text-[#002966] text-base sm:text-lg mb-0.5">How to Teach IELTS</div>
                        <div className="text-xs sm:text-sm text-red-500 font-medium">Cambridge English / IDP</div>
                      </div>
                    </div>

                    {/* Cert 2 */}
                    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg active:shadow-lg transition-shadow group flex flex-col">
                      <div className="w-full bg-gray-50/50 flex items-center justify-center overflow-hidden h-40 sm:h-48 p-4">
                        <img src={certPte} alt="PTE Certificate" className="w-full h-full object-contain group-hover:scale-[1.03] group-active:scale-[1.03] transition-transform duration-500" />
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center border-t border-gray-50 text-left">
                        <div className="font-extrabold text-[#002966] text-base sm:text-lg mb-0.5">PTE Academic Certified</div>
                        <div className="text-xs sm:text-sm text-red-500 font-medium">Pearson Pathways</div>
                      </div>
                    </div>

                    {/* Cert 3 */}
                    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg active:shadow-lg transition-shadow group flex flex-col">
                      <div className="w-full bg-gray-50/50 flex items-center justify-center overflow-hidden h-40 sm:h-48 p-4">
                        <img src={certPreply} alt="Preply Certificate" className="w-full h-full object-contain group-hover:scale-[1.03] group-active:scale-[1.03] transition-transform duration-500" />
                      </div>
                      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center border-t border-gray-50 text-left">
                        <div className="font-extrabold text-[#002966] text-base sm:text-lg mb-0.5">Language Teaching Certificate</div>
                        <div className="text-xs sm:text-sm text-red-500 font-medium">Trinity</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {captainTab === 'reviews' && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="text-center mb-6 max-w-2xl mx-auto">
                    <p className="text-gray-600 text-sm sm:text-base font-medium">
                      Direct chat updates and target band success stories from our student community.
                    </p>
                  </div>
                  {/* WhatsApp Slider */}
                  <div className="w-full relative py-2 max-w-5xl mx-auto">
                    <Carousel>
                      {whatsappTestimonials.map((item, idx) => (
                        <div key={idx} className="w-[260px] sm:w-[300px] md:w-[340px] shrink-0 bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col shadow-lg hover:-translate-y-1 active:-translate-y-1 transition-transform duration-300 snap-start">
                           {/* Header with DP */}
                           <div className="p-3 sm:p-4 bg-[#f2f7fc] border-b border-gray-100 flex items-center gap-3 text-left">
                             <img src={item.dp} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-xs border-2 border-white bg-white" />
                             <div className="flex flex-col">
                               <h4 className="font-bold text-[#002966] text-sm sm:text-base leading-tight">{item.name}</h4>
                               <span className="text-[#9c080a] font-semibold text-[10px] sm:text-xs mt-0.5">{item.subheading}</span>
                             </div>
                           </div>
                           {/* WhatsApp Image */}
                           <div className="w-full bg-gray-50 flex flex-1 items-center justify-center p-3 sm:p-4">
                             <img src={item.wa} alt={`WhatsApp from ${item.name}`} className="w-full h-auto max-h-[220px] sm:max-h-[260px] object-contain rounded-xl shadow-xs border border-gray-200" />
                           </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Preparation System & Pricing Section */}
        <section 
          id="preparation" 
          className="py-10 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8fbff] snap-start relative"
        >
          <div className="max-w-4xl mx-auto relative z-10">

            {/* Header Content */}
            <div className="w-full text-left mb-10">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex justify-start mb-4 md:mb-6"
              >
                <div className="px-4 py-1.5 border border-blue-100 bg-white rounded-full text-[#002966] text-xs font-extrabold tracking-widest uppercase shadow-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#002966]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  What You Get
                </div>
              </motion.div>

              <motion.h2 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#002966]"
              >
                Here's <span className="text-[#9c080a] italic">Exactly</span> How We Get You There
              </motion.h2>
            </div>

            {/* 4 Stats Cards */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md active:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-extrabold text-[#002966] mb-1 flex items-baseline justify-center">
                  4–<AnimatedCounter end={6} />
                  <span className="text-xl md:text-2xl font-bold ml-0.5">wks</span>
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">Focused preparation<br />timeline</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md active:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-extrabold text-[#002966] mb-1">
                  <AnimatedCounter end={20} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">Hours of live training</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md active:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-extrabold text-[#002966] mb-1">
                  <AnimatedCounter end={50} />
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">Full exam simulations</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md active:shadow-md transition-shadow">
                <div className="text-3xl md:text-4xl font-extrabold text-[#002966] mb-1 flex items-baseline justify-center">
                  <AnimatedCounter end={3} />
                  <span className="text-xl md:text-2xl font-bold ml-0.5">mo</span>
                </div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">Full course access</div>
              </div>
            </motion.div>

            {/* Main Pricing Box */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"
            >

              {/* Dark Header */}
              <div className="bg-[#002966] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">June Intake — Full Program</h3>
                  <p className="text-blue-200 text-sm md:text-base">Everything included. Nothing extra to buy.</p>
                </div>
                <div className="px-4 py-2 bg-[#001f4d] rounded-full border border-blue-400/20 text-white text-sm font-bold flex items-center gap-2 shrink-0 shadow-inner">
                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  4–6 Week Program
                </div>
              </div>

              {/* Features Grid */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f7fc] text-[#002966] flex items-center justify-center shrink-0 border border-blue-100/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#002966] text-sm md:text-base">20+ Hours Live Training</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-0.5">+ Recorded access for every session</div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f7fc] text-[#002966] flex items-center justify-center shrink-0 border border-blue-100/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#002966] text-sm md:text-base">50 Full Exam Simulations</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-0.5">Real exam conditions, every time</div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-700 flex items-center justify-center shrink-0 border border-yellow-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#002966] text-sm md:text-base">Unlimited Practice Bank</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-0.5">Skill-wise drills for every module</div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f2f7fc] text-[#002966] flex items-center justify-center shrink-0 border border-blue-100/50">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#002966] text-sm md:text-base">Hybrid Lessons</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-0.5">Online + In-person flexibility</div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#002966] text-sm md:text-base">3x 1:1 Speaking Practice</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-0.5">Live sessions with your coach</div>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#9c080a] flex items-center justify-center shrink-0 border border-red-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#002966] text-sm md:text-base">3x 1:1 Writing Evaluations</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-0.5">Detailed feedback on every task</div>
                  </div>
                </div>
              </div>

              {/* Beyond the Classroom */}
              <div className="bg-gray-50/50 p-6 md:p-8 border-t border-gray-100">
                <h4 className="text-[#9c080a] font-bold text-xs uppercase tracking-widest mb-6">Beyond The Classroom</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">

                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    <span className="font-bold text-[#002966] text-sm md:text-base">24/7 WhatsApp Support</span>
                  </div>

                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                    <span className="font-bold text-[#002966] text-sm md:text-base">Personalised Study Plan</span>
                  </div>

                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                    <span className="font-bold text-[#002966] text-sm md:text-base">Step-by-Step Digital Notes</span>
                  </div>

                  <div className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                    <svg className="w-5 h-5 text-[#002966] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="font-bold text-[#002966] text-sm md:text-base">Exam Registration Support</span>
                  </div>

                </div>
              </div>

              {/* Footer / Pricing / CTA */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-8 bg-white border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-gray-400 line-through text-sm md:text-base">PKR 72,553</span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#9c080a] bg-red-50 px-2.5 py-1 rounded-full border border-red-100">Save PKR 20,300</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-bold text-[#002966] text-lg">PKR</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-[#002966] tracking-tight">52,253</span>
                    <span className="text-gray-400 text-sm">/ one-time</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-bold rounded-full shadow-sm">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                    May Intake Special Price
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                  <a href="https://wa.link/vk9h0d" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#25D366] hover:bg-[#25D366] active:bg-[#25D366] hover:brightness-105 active:brightness-95 text-white px-8 py-4 rounded-xl font-bold md:text-lg shadow-lg hover:shadow-xl active:shadow-xl hover:-translate-y-1 active:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Start My Preparation
                  </a>
                  <div className="text-xs text-gray-500 font-medium flex items-center justify-center md:justify-end gap-1.5 w-full">
                    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Includes full prep + support + money-back guarantee
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </section>

        {/* Commitment Section */}
        <section 
          id="commitment" 
          className="py-10 md:py-24 bg-white relative snap-start"
        >
          <div className="w-full relative">
            {/* Header */}
            <div className="w-full text-center mb-16">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">
                  <span className="text-[#002966]">Mindful's Promise to Your</span> <span className="text-[#9c080a] italic">Success</span>
                </h2>
              </motion.div>
            </div>

            {/* Row 1: 3 Cards */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 mb-16">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
              {/* Card 1: Guaranteed */}
              <div className="border border-[#002966] rounded-xl p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md active:shadow-md transition-all hover:-translate-y-1 active:-translate-y-1">
                <svg className="w-10 h-10 text-[#002966] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <div className="text-[10px] sm:text-xs font-bold text-[#002966] tracking-widest uppercase mb-4">Guaranteed</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#002966] mb-3">Pay once, continue until ready</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-2">Continue learning with us if you haven't reached your target.</p>
              </div>

              {/* Card 2: Zero Risk */}
              <div className="border border-[#002966] rounded-xl p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md active:shadow-md transition-all hover:-translate-y-1 active:-translate-y-1">
                <svg className="w-10 h-10 text-[#002966] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className="text-[10px] sm:text-xs font-bold text-[#002966] tracking-widest uppercase mb-4">Zero Risk</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#002966] mb-3">Risk-free start</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-2">Try the first week — full refund if it doesn't meet your expectations.</p>
              </div>

              {/* Card 3: Exclusive */}
              <div className="border border-[#9c080a] rounded-xl p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md active:shadow-md transition-all hover:-translate-y-1 active:-translate-y-1 relative overflow-hidden">
                <svg className="w-10 h-10 text-[#002966] mb-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <div className="text-[10px] sm:text-xs font-bold text-[#002966] tracking-widest uppercase mb-4">Exclusive</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#002966] mb-3">High performance reward</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-2">Students achieving Band 7+ are eligible for a high performance reward as recognition of their achievement.</p>
              </div>
            </motion.div>
          </div>

          {/* Marquee Ribbon */}
          <div className="w-full bg-[#002966] py-4 md:py-5 overflow-hidden mb-16 relative z-20">
            <div 
              onMouseEnter={() => setIsMarqueePaused(true)}
              onMouseLeave={() => setIsMarqueePaused(false)}
              onTouchStart={() => setIsMarqueePaused(true)}
              onTouchEnd={() => setIsMarqueePaused(false)}
              onTouchCancel={() => setIsMarqueePaused(false)}
              className="flex w-max animate-scroll-2 cursor-pointer"
              style={{ animationPlayState: isMarqueePaused ? 'paused' : 'running' }}
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 px-4 whitespace-nowrap text-white font-bold tracking-[0.2em] text-sm md:text-base uppercase">
                  <span>PROVEN LEARNING FRAMEWORK</span>
                  <svg className="w-4 h-4 text-[#9c080a]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                  <span>PERFORMANCE TRACKING</span>
                  <svg className="w-4 h-4 text-[#9c080a]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                  <span>EXPERT FEEDBACK</span>
                  <svg className="w-4 h-4 text-[#9c080a]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
            {/* Row 2: 2 Cards */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Card 4 */}
              <div className="border border-[#002966] rounded-xl p-6 md:p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                <h3 className="text-lg md:text-xl font-bold text-[#002966] mb-2">No time pressure</h3>
                <p className="text-sm text-gray-500">Learn at your own pace without rushing through the material</p>
              </div>

              {/* Card 5 */}
              <div className="border border-[#002966] rounded-xl p-6 md:p-8 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                <h3 className="text-lg md:text-xl font-bold text-[#002966] mb-2">You only do this once</h3>
                <p className="text-sm text-gray-500">Get it right the first time with our comprehensive approach</p>
              </div>
            </motion.div>

            {/* Commitment Images Grid */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 bg-white p-2">
                <img src={commitmentImg1} alt="Mindful Commitment Proof 1" className="w-full h-auto rounded-xl object-contain" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 bg-white p-2">
                <img src={commitmentImg2} alt="Mindful Commitment Proof 2" className="w-full h-auto rounded-xl object-contain" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 bg-white p-2">
                <img src={commitmentImg3} alt="Mindful Commitment Proof 3" className="w-full h-auto rounded-xl object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <section 
          id="faqs" 
          className="py-10 md:py-24 bg-gray-50 snap-start"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative">
            {/* Header */}
            <div className="w-full text-center mb-4">
              <motion.div 
                variants={fadeUp} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#002966] tracking-tight">
                  Got <span className="text-[#9c080a] italic">Questions?</span><br className="md:hidden" /> We've Got Honest Answers.
                </h2>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
                Everything students ask before enrolling — answered clearly.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: "What if I’m weak in English?",
                  a: "You don't need to be fluent before you join — you need a system that builds your skills step by step, with an expert coach who knows where you're losing marks and fixes it."
                },
                {
                  q: "How long is the course and how many hours per week?",
                  a: "The standard program runs for 4 to 6 weeks. You'll need roughly 8–10 hours per week — a mix of 2 live sessions, self-study, and practice tasks. We design the flexible schedule so it fits around work or university commitments."
                },
                {
                  q: "What band score can I realistically expect?",
                  a: "That depends on where you start. Students who come in at Band 5-5.5 typically reach Band 6.5-7.0. Those already at Band 6 commonly achieve Band 7-7.5. We set your personal target in the first session after an assessment and plan your preparation around that specific goal. Our average student improves by 1-1.5 bands within one program cycle."
                },
                {
                  q: "I've failed the IELTS twice already. Can this still work for me?",
                  a: "Yes. Past failures are almost always caused by unstructured preparation and ineffective strategies, not ability. We replace guesswork with a system that targets exactly what costs you marks."
                },
                {
                  q: "What if I don’t find the course helpful?",
                  a: "Attend the first week of live trainings. If you’re not completely satisfied within 7 days, you can request a full refund."
                },
                {
                  q: "Will I need to take the exam multiple times?",
                  a: "That’s exactly what we try to avoid. Most retakes happen because students attempt too early. Here, you only attempt when you’ll be given an exam-ready assurance certificate."
                },
                {
                  q: "Is this online or In-person?",
                  a: "Our classes are hybrid, you can choose between online and in-person sessions as per your convenience."
                },
                {
                  q: "When does the next batch start?",
                  a: "Batches are limited in size to keep the coaching quality high. Message us on WhatsApp and we'll tell you the exact start date and how many seats are left. Spots fill up — it's worth checking early."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md active:shadow-md transition-shadow overflow-hidden">
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-[#002966] text-lg hover:text-[#9c080a] active:text-[#9c080a] transition-colors">
                    <span>{faq.q}</span>
                    <span className="transition group-open:rotate-180 text-gray-400 group-hover:text-[#9c080a] group-active:text-[#9c080a]">
                      <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9" /></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed group-open:animate-fadeIn">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-16 text-center bg-blue-50/50 rounded-2xl p-8 border border-blue-100/50">
              <h3 className="text-xl font-bold text-[#002966] mb-3">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Chat with our team directly. We usually reply within minutes.</p>
              <a href="https://wa.link/vk9h0d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366] active:bg-[#25D366] hover:brightness-105 active:brightness-95 text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg active:shadow-lg transition-all hover:-translate-y-0.5 active:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section 
          id="apply" 
          className="py-10 md:py-24 bg-white snap-start"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative">
            {/* Mobile Sticky Header */}
            <div className="md:hidden w-full text-left mb-6">
              <h2 className="text-3xl font-extrabold text-[#002966] tracking-tight leading-tight">
                Start Your <span className="text-[#9c080a] italic">IELTS Journey</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Column: Headings and Info */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 pt-4"
            >
              <div className="hidden md:block w-full mb-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002966] tracking-tight leading-tight">
                  Start Your <span className="text-[#9c080a] italic">IELTS Journey</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-12 leading-relaxed">
                Ready to Hit Your Target Band — Without wasting the exam fee?
              </p>

              <div className="hidden lg:block space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50">
                    <svg className="w-7 h-7 text-[#002966]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#002966] mb-1">Guaranteed Results</h4>
                    <p className="text-gray-500 leading-relaxed">Continue learning with us if you haven't reached your target. No extra fees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50">
                    <svg className="w-7 h-7 text-[#002966]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#002966] mb-1">Fast Turnaround</h4>
                    <p className="text-gray-500 leading-relaxed">We'll review your application and send the next steps within 24 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>

             {/* Right Column: Form */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-6 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                ADMISSION FORM
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#002966] mb-3">Apply Now & Secure Your Spot</h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">Fill out the brief form — we'll confirm your place and send next steps within 24 hours.</p>
 
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-2">Full Name</label>
                  <input type="text" placeholder="e.g. Ahmad Khan" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm shadow-sm" />
                </div>
 
                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-2">WhatsApp Number</label>
                  <input type="text" placeholder="e.g. 0300 1234567" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-2">Email Address</label>
                  <input type="email" placeholder="e.g. ahmad.khan@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-2">Target Band Score</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm appearance-none bg-no-repeat bg-[right_1rem_center] shadow-sm text-gray-700" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23002966'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundSize: '1.2rem' }} defaultValue="">
                    <option value="" disabled>Select your target band</option>
                    <option>5.0</option>
                    <option>5.5</option>
                    <option>6.0</option>
                    <option>6.5</option>
                    <option>7.0</option>
                    <option>7.5</option>
                    <option>8.0</option>
                    <option>8.5</option>
                    <option>9.0</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-2">Reason for IELTS</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm appearance-none bg-no-repeat bg-[right_1rem_center] shadow-sm text-gray-700" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23002966'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundSize: '1.2rem' }} defaultValue="">
                    <option value="" disabled>Select your reason</option>
                    <option>Study (University / Higher Education)</option>
                    <option>Immigration</option>
                    <option>Medical / Healthcare Licensing</option>
                    <option>LAW / Barrister Pathway</option>
                    <option>Personal Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-1">When are you seriously aiming to take your IELTS exam?</label>
                  <p className="text-xs text-gray-500 mb-2">(Approximate date)</p>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm text-gray-700 shadow-sm" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#002966] mb-2">Which module might require the most effort from you?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002966] focus:outline-none focus:ring-4 focus:ring-[#002966]/10 transition-all text-sm appearance-none bg-no-repeat bg-[right_1rem_center] shadow-sm text-gray-700" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23002966'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundSize: '1.2rem' }} defaultValue="">
                    <option value="" disabled>Select a module</option>
                    <option>Reading</option>
                    <option>Writing</option>
                    <option>Listening</option>
                    <option>Speaking</option>
                    <option>Not sure</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-bold text-[#002966] mb-4">What kind of support are you looking for? (Check all that apply)</label>
                  <div className="space-y-3.5">
                    {[
                      "Just evaluation / clarity / Consultation",
                      "Feedback on my performance",
                      "Step-by-step training",
                      "Full guidance until exam",
                      "Full Length Mock Exam",
                      "Test Registration Assistance"
                    ].map((option, idx) => (
                      <label key={idx} className="flex items-start gap-3.5 cursor-pointer group">
                        <div className="relative flex items-start mt-0.5">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded cursor-pointer checked:bg-[#002966] checked:border-[#002966] transition-colors" />
                          <svg className="absolute w-3.5 h-3.5 text-white top-1 left-[3px] opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#002966] group-active:text-[#002966] transition-colors leading-snug">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Admissions@mindful.com.pk" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#002966] hover:bg-[#001f4d] active:bg-[#001f4d] text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg active:shadow-lg transition-all hover:-translate-y-0.5 active:-translate-y-0.5 mb-6 text-lg">
                    Start My Preparation
                  </a>

                  <div className="flex flex-col items-center gap-3.5">
                    <a href="https://wa.link/vk9h0d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-[#002966] font-bold text-sm hover:text-[#25D366] active:text-[#25D366] transition-colors">
                      <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      Chat With a Real IELTS Coach
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Admissions@mindful.com.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-[#002966] font-bold text-sm hover:text-[#9c080a] active:text-[#9c080a] transition-colors">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Admissions@mindful.com.pk
                    </a>
                  </div>
                </div>
              </form>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section 
          className="py-10 md:py-24 bg-white px-4 sm:px-6 md:px-12 flex justify-center snap-start"
        >
          <div className="w-full max-w-5xl bg-white border border-gray-100 rounded-[2.5rem] px-4 py-8 sm:p-10 md:p-16 lg:p-24 text-center shadow-xs relative overflow-hidden">
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Target Icon Element */}
              <div className="flex justify-center mb-8 relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#f2f7fc] border border-blue-100/50 flex items-center justify-center shadow-xs">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#002966]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Quote */}
              <h3 className="text-[4.5vw] sm:text-3xl md:text-4xl lg:text-5xl italic text-[#002966] leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                <span className="inline-block whitespace-nowrap">Stop risking an opportunity you want</span><br />
                <span className="inline-block whitespace-nowrap">just because you delayed</span><br />
                <span className="text-[#9c080a] italic font-semibold inline-block whitespace-nowrap">the right guidance.</span>
              </h3>

              {/* Red line separator and Name */}
              <div className="flex flex-col items-center justify-center mb-10">
                <div className="w-12 h-0.5 bg-[#9c080a] mb-4"></div>
                <div className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-[#002966]/60 uppercase">
                  HUSSAIN QAIZAR - MINDFUL IELTS
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a 
                  href="https://wa.link/vk9h0d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#fbf9f4] border border-[#e5e1d8] text-[#002966] font-extrabold text-sm md:text-base rounded-2xl shadow-sm hover:shadow-md active:shadow-md hover:bg-white active:bg-white active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  Join Mindful — Enroll Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer / Final CTA */}
      <footer ref={footerRef} className="bg-[#002966] py-24 md:py-32 px-4 sm:px-6 md:px-12 text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Overline */}
          <motion.div variants={fadeUp} className="text-blue-200 text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase mb-8">
            The End Result
          </motion.div>

          {/* Headings */}
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            One attempt.<br className="hidden md:block" />
            Your target band.
          </motion.h2>

          {/* Paragraph */}
          <motion.p variants={fadeUp} className="text-blue-100 text-base md:text-lg max-w-[650px] mx-auto mb-14 leading-relaxed font-medium">
            This is what the entire program is built around — not just passing, but walking in knowing you will.
          </motion.p>

          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-16 max-w-5xl">
            <span className="bg-[#9c080a] text-white px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md whitespace-nowrap">
              Band 7+
            </span>
            <span className="bg-[#9c080a] text-white px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md whitespace-nowrap">
              No regrets
            </span>
            {[
              "First attempt",
              "No retakes",
              "No wasted money",
              "Real confidence"
            ].map((text, idx) => (
              <span key={idx} className="border border-blue-400/30 text-blue-100 px-4 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:border-blue-400 active:border-blue-400 hover:text-white active:text-white transition-colors cursor-default whitespace-nowrap">
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a variants={fadeUp} href="https://mail.google.com/mail/?view=cm&fs=1&to=Admissions@mindful.com.pk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-[#002966] hover:bg-gray-50 active:bg-gray-50 px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-xl hover:-translate-y-1 active:-translate-y-1 transition-all group min-w-[280px]">
            Start your transformation
            <span className="font-normal text-xl group-hover:translate-x-1 group-active:translate-x-1 transition-transform">&rarr;</span>
          </motion.a>
        </motion.div>
      </footer>

      {/* Sticky Bottom Action Bar */}
      <AnimatePresence>
        {isStickyVisible && (
          <div
            id="sticky-action-bar"
            className={isIframe && hasReceivedScroll ? 'absolute left-0 right-0 z-40 pointer-events-none' : 'contents'}
            style={isIframe && hasReceivedScroll ? {
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 'auto',
              transform: `translate3d(0, ${-iframeTop + parentHeight - (window.innerWidth < 640 ? 170 : 120)}px, 0)`,
              zIndex: 40,
            } : {}}
          >
            <motion.div
              initial={isIframe && hasReceivedScroll ? { opacity: 0 } : { y: 100, opacity: 0 }}
              animate={isIframe && hasReceivedScroll ? { opacity: 1 } : { y: 0, opacity: 1 }}
              exit={isIframe && hasReceivedScroll ? { opacity: 0 } : { y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className={`fixed bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 z-40 max-w-5xl md:mx-auto bg-gradient-to-r from-white via-blue-50/10 to-white/95 backdrop-blur-md border border-[#002966]/15 shadow-[0_12px_40px_rgba(0,41,102,0.18)] rounded-3xl py-4 sm:py-5 px-5 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pointer-events-auto ${isIframe && hasReceivedScroll ? '!relative !bottom-0 !left-0 !right-0 !mx-auto' : ''}`}
            >
              {/* Left: Text Content */}
              <span className="text-[#002966] font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-tight select-none text-center sm:text-left">
                100% Risk free investment
              </span>

              {/* Right: Access This Course Button */}
              <a 
                href="https://wa.link/vk9h0d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#002966] hover:bg-[#001f4d] active:bg-[#001f4d] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap block text-center"
              >
                Access This Course
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header / Close button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="bg-black/50 hover:bg-[#9c080a] active:bg-[#9c080a] hover:scale-105 active:scale-95 text-white p-2 rounded-full transition-all cursor-pointer shadow-md"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Responsive Video Container */}
              <div className="aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  src={getAssetUrl("Hero/hero-video.mp4")}
                  controls
                  playsInline
                  preload="auto"
                  style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 select-none"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="bg-black/50 hover:bg-[#9c080a] active:bg-[#9c080a] hover:scale-105 active:scale-95 text-white p-2.5 rounded-full transition-all cursor-pointer shadow-md"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Controls */}
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer border border-white/10"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Main Content Area */}
            <motion.div
              key={activePhotoIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[activePhotoIndex].src}
                alt={`Gallery image ${activePhotoIndex + 1}`}
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/5"
              />
            </motion.div>

            {/* Caption / Image Counter */}
            <div className="absolute bottom-6 text-white/70 text-sm font-semibold tracking-wide bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-xs">
              {activePhotoIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
