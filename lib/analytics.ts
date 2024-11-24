'use client';

import { useEffect } from 'react';

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export function useAnalytics() {
  useEffect(() => {
    const reportWebVitals = ({ name, delta, id }: any) => {
      // You can send this data to your analytics service
      console.log(`Metric: ${name} (ID: ${id}) changed by ${delta}`);
    };

    // Monitor performance metrics
    if (typeof window !== 'undefined') {
      // @ts-ignore
      if (window.performance && window.performance.getEntriesByType) {
        const metrics = {
          FCP: 0, // First Contentful Paint
          LCP: 0, // Largest Contentful Paint
          CLS: 0, // Cumulative Layout Shift
          FID: 0, // First Input Delay
        };

        // Observer for LCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.LCP = lastEntry.startTime;
          reportWebVitals({ name: 'LCP', delta: lastEntry.startTime, id: 'LCP' });
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Observer for FID
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            const firstEntry = entries[0] as PerformanceEventTiming;
            metrics.FID = firstEntry.startTime;
            reportWebVitals({ name: 'FID', delta: firstEntry.startTime, id: 'FID' });
          }
        }).observe({ entryTypes: ['first-input'] });

        // Observer for CLS
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries() as LayoutShift[];
          let clsValue = 0;
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.CLS = clsValue;
          reportWebVitals({ name: 'CLS', delta: clsValue, id: 'CLS' });
        }).observe({ entryTypes: ['layout-shift'] });

        // Get FCP
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const firstEntry = entries[0];
          metrics.FCP = firstEntry.startTime;
          reportWebVitals({ name: 'FCP', delta: firstEntry.startTime, id: 'FCP' });
        }).observe({ entryTypes: ['paint'] });
      }
    }
  }, []);
}
