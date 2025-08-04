import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface FluidGridProps {
  children: React.ReactNode;
  minItemWidth?: number;
  maxItemWidth?: number;
  gap?: number;
  className?: string;
  enableMasonry?: boolean;
}

export const FluidGrid: React.FC<FluidGridProps> = ({
  children,
  minItemWidth = 280,
  maxItemWidth = 400,
  gap = 24,
  className = '',
  enableMasonry = false
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateGrid = () => {
      if (!gridRef.current) return;

      const container = gridRef.current;
      const containerRect = container.getBoundingClientRect();
      const availableWidth = containerRect.width;
      
      // Calculate optimal number of columns
      const maxColumns = Math.floor((availableWidth + gap) / (minItemWidth + gap));
      const minColumns = Math.floor((availableWidth + gap) / (maxItemWidth + gap));
      
      const optimalColumns = Math.max(1, Math.min(maxColumns, Math.max(minColumns, 1)));
      
      setColumns(optimalColumns);
      setContainerWidth(availableWidth);
    };

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateGrid);
    if (gridRef.current) {
      resizeObserver.observe(gridRef.current);
    }

    // Initial calculation
    updateGrid();

    return () => {
      resizeObserver.disconnect();
    };
  }, [minItemWidth, maxItemWidth, gap]);

  const itemWidth = containerWidth > 0 
    ? (containerWidth - (gap * (columns - 1))) / columns 
    : '100%';

  const gridStyles: React.CSSProperties = enableMasonry ? {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
    alignItems: 'start'
  } : {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
    gap: `${gap}px`,
    alignItems: 'stretch'
  };

  return (
    <motion.div
      ref={gridRef}
      className={`fluid-grid ${className}`}
      style={gridStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          className="grid-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          style={!enableMasonry ? { width: itemWidth } : {}}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};