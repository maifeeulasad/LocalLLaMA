import React, { lazy, Suspense } from 'react';

const Page1m7k4ix = lazy(() => import('./Page'));

const LazyPage1m7k4ix = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7k4ix />
  </Suspense>
);

export { LazyPage1m7k4ix };
