import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Brain, DollarSign, AlertTriangle, BarChart, Clock, TrendingUp } from 'lucide-react';
import QuickAction from './QuickAction';

const QuickActionsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef<NodeJS.Timeout>();

  const actions = [
    { 
      icon: <Brain className="h-6 w-6" />, 
      label: "Investment Options",
      colorClass: "bg-blue-50",
      hoverColorClass: "hover:bg-blue-100"
    },
    { 
      icon: <DollarSign className="h-6 w-6" />, 
      label: "Cost Savings",
      colorClass: "bg-emerald-50",
      hoverColorClass: "hover:bg-emerald-100"
    },
    { 
      icon: <AlertTriangle className="h-6 w-6" />, 
      label: "Risk Assessment",
      colorClass: "bg-rose-50",
      hoverColorClass: "hover:bg-rose-100"
    },
    { 
      icon: <BarChart className="h-6 w-6" />, 
      label: "Component Analysis",
      colorClass: "bg-violet-50",
      hoverColorClass: "hover:bg-violet-100"
    },
    { 
      icon: <Clock className="h-6 w-6" />, 
      label: "Future Planning",
      colorClass: "bg-amber-50",
      hoverColorClass: "hover:bg-amber-100"
    },
    { 
      icon: <TrendingUp className="h-6 w-6" />, 
      label: "Budget Optimization",
      colorClass: "bg-indigo-50",
      hoverColorClass: "hover:bg-indigo-100"
    }
  ];

  const startAutoScroll = () => {
    if (!isAutoScrolling) return;
    
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 0.3, behavior: 'auto' });
        }
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [isAutoScrolling]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group bg-gray-50 rounded-xl p-4 shadow-lg">
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      )}
      
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
        className="flex items-center space-x-8 overflow-x-auto scrollbar-hide px-4 py-2"
        style={{ scrollBehavior: 'smooth' }}
      >
        {actions.map((action, index) => (
          <QuickAction 
            key={index} 
            icon={action.icon} 
            label={action.label}
            colorClass={action.colorClass}
            hoverColorClass={action.hoverColorClass}
          />
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default QuickActionsScroll;