'use client';

"use client";

import { motion, AnimatePresence } from 'framer-motion';

export function CinematicLoader() {

  const bgColor = 'bg-background';
  const textColor = 'text-foreground';
  const borderColor = 'border-foreground/10';

  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${bgColor} ${textColor} overflow-hidden w-screen h-screen`}
        >
          {/* Film strip effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] w-full bg-foreground/20"
                initial={{ y: -10 }}
                animate={{ 
                  y: '100vh',
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.1,
                  },
                }}
              />
            ))}
          </div>
          
          {/* Center content */}
          <motion.div 
            className="relative z-10 text-center p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <motion.div 
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  '0 0 8px rgba(251, 191, 36, 0.5)',
                  '0 0 16px rgba(251, 191, 36, 0.7)',
                  '0 0 8px rgba(251, 191, 36, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
              IMPACT
            </motion.div>
            
            <motion.div 
              className="h-1 w-32 mx-auto bg-gradient-to-r from-amber-500/50 to-yellow-400/50 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.7, duration: 0.6 }
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
                initial={{ x: '-100%' }}
                animate={{ 
                  x: '100%',
                  transition: { 
                    duration: 2, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Bottom film strip */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background/80 flex items-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.4, duration: 0.6 }
            }}
          >
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className={`h-full w-6 border-l-2 border-r-2 ${borderColor} mx-2`}
              />
            ))}
          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
}
