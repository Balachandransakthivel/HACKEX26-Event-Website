import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Code2 } from 'lucide-react';

interface WelcomeSplashProps {
  onComplete?: () => void;
}

export function WelcomeSplash({ onComplete }: WelcomeSplashProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    // Auto-dismiss splash screen after 2.8 seconds
    const timer = setTimeout(() => {
      dismissSplash();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const dismissSplash = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 600); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="welcome-splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          data-testid="welcome-splash"
        >
          {/* Cybernetic grid & glowing background */}
          <div className="splash-grid-bg" aria-hidden="true" />
          <div className="splash-glowing-orb" aria-hidden="true" />
          <div className="splash-glowing-orb secondary" aria-hidden="true" />

          <div className="splash-content">
            {/* Top Organization Badge */}
            <motion.div
              className="splash-top-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Sparkles size={13} className="splash-icon-sparkle" />
              <span>EXCEL ENGINEERING COLLEGE • TECHNO DEBUGGERS CLUB</span>
            </motion.div>

            {/* Glowing Brand Mark */}
            <motion.div
              className="splash-brand-mark"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="splash-mark-inner">
                <Code2 size={32} />
              </div>
              <div className="splash-mark-ring" />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="splash-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              HACKE<span className="brand-x">X</span>’26
            </motion.h1>

            <motion.p
              className="splash-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              A NATIONAL LEVEL HACKATHON
            </motion.p>

            <motion.div
              className="splash-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <span>CODE</span> • <span>COLLABORATE</span> • <span>CREATE IMPACT</span>
            </motion.div>

            {/* Progress / Loading Indicator */}
            <motion.div
              className="splash-progress-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <div className="splash-progress-header">
                <span className="splash-status-text">
                  <Zap size={12} className="inline-icon" /> INITIALIZING HACKATHON GRID...
                </span>
                <span className="splash-percent">{progress}%</span>
              </div>
              <div className="splash-progress-track">
                <motion.div
                  className="splash-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>

            {/* Enter / Skip Button */}
            <motion.button
              className="splash-enter-btn"
              onClick={dismissSplash}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              data-testid="button-enter-site"
            >
              <span>Enter Site</span>
              <ArrowRight size={15} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
