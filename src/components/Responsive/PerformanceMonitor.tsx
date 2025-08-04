import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkSpeed: 'slow' | 'fast' | 'unknown';
  batteryLevel?: number;
  isLowPowerMode?: boolean;
}

interface PerformanceMonitorProps {
  showDebugInfo?: boolean;
  onPerformanceChange?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showDebugInfo = false,
  onPerformanceChange
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkSpeed: 'unknown'
  });
  
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const animationFrame = useRef<number>();

  useEffect(() => {
    // FPS monitoring
    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime.current + 1000) {
        const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
        
        setMetrics(prev => ({ ...prev, fps }));
        
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      animationFrame.current = requestAnimationFrame(measureFPS);
    };

    measureFPS();

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    // Memory usage monitoring
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Network speed detection
    const detectNetworkSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        let networkSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
        
        if (connection.effectiveType === '4g' || connection.effectiveType === '5g') {
          networkSpeed = 'fast';
        } else if (connection.effectiveType === '3g' || connection.effectiveType === '2g') {
          networkSpeed = 'slow';
        }
        
        setMetrics(prev => ({ ...prev, networkSpeed }));
      }
    };

    // Battery status
    const detectBatteryStatus = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          setMetrics(prev => ({
            ...prev,
            batteryLevel: Math.round(battery.level * 100),
            isLowPowerMode: battery.level < 0.2
          }));
        } catch (error) {
          // Battery API not supported
        }
      }
    };

    // Load time measurement
    const measureLoadTime = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    };

    measureMemory();
    detectNetworkSpeed();
    detectBatteryStatus();
    measureLoadTime();

    // Set up intervals for continuous monitoring
    const memoryInterval = setInterval(measureMemory, 5000);
    const networkInterval = setInterval(detectNetworkSpeed, 10000);

    return () => {
      clearInterval(memoryInterval);
      clearInterval(networkInterval);
    };
  }, []);

  useEffect(() => {
    onPerformanceChange?.(metrics);
  }, [metrics, onPerformanceChange]);

  // Auto-adjust performance based on metrics
  useEffect(() => {
    const adjustPerformance = () => {
      const root = document.documentElement;
      
      // Reduce animations on low FPS
      if (metrics.fps < 30) {
        root.style.setProperty('--animation-duration', '0.1s');
        root.classList.add('low-performance');
      } else if (metrics.fps < 45) {
        root.style.setProperty('--animation-duration', '0.2s');
        root.classList.add('medium-performance');
      } else {
        root.style.setProperty('--animation-duration', '0.3s');
        root.classList.remove('low-performance', 'medium-performance');
      }

      // Adjust quality based on memory usage
      if (metrics.memoryUsage > 80) {
        root.classList.add('high-memory-usage');
      } else {
        root.classList.remove('high-memory-usage');
      }

      // Adjust for network speed
      if (metrics.networkSpeed === 'slow') {
        root.classList.add('slow-network');
      } else {
        root.classList.remove('slow-network');
      }

      // Battery optimization
      if (metrics.isLowPowerMode) {
        root.classList.add('low-power-mode');
      } else {
        root.classList.remove('low-power-mode');
      }
    };

    adjustPerformance();
  }, [metrics]);

  const getPerformanceColor = (value: number, thresholds: [number, number]) => {
    if (value >= thresholds[1]) return 'text-green-500';
    if (value >= thresholds[0]) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (!showDebugInfo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg text-xs font-mono"
      >
        <div className="space-y-1">
          <div className={`flex justify-between ${getPerformanceColor(metrics.fps, [30, 50])}`}>
            <span>FPS:</span>
            <span>{metrics.fps}</span>
          </div>
          
          <div className={`flex justify-between ${getPerformanceColor(100 - metrics.memoryUsage, [20, 50])}`}>
            <span>Memory:</span>
            <span>{metrics.memoryUsage}%</span>
          </div>
          
          <div className="flex justify-between text-blue-400">
            <span>Load:</span>
            <span>{metrics.loadTime}ms</span>
          </div>
          
          <div className={`flex justify-between ${
            metrics.networkSpeed === 'fast' ? 'text-green-500' : 
            metrics.networkSpeed === 'slow' ? 'text-red-500' : 'text-gray-400'
          }`}>
            <span>Network:</span>
            <span>{metrics.networkSpeed}</span>
          </div>
          
          {metrics.batteryLevel !== undefined && (
            <div className={`flex justify-between ${getPerformanceColor(metrics.batteryLevel, [20, 50])}`}>
              <span>Battery:</span>
              <span>{metrics.batteryLevel}%</span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};