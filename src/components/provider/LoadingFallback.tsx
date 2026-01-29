import { motion } from "motion/react";

function LoadingFallback() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Logo with breathing animation */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src='./logo.svg'
            alt="Logo"
            width={120}
            height={120}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Loading text with animated dots */}
        <div className="flex items-center gap-1">
          <span className="text-gray-500 font-medium">Loading</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-teal-600 text-xl font-bold"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="text-teal-600 text-xl font-bold"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="text-teal-600 text-xl font-bold"
          >
            .
          </motion.span>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingFallback;
