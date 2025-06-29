import React, { lazy, Suspense } from 'react';

const Page1lmy53s = lazy(() => import('./Page'));

const LazyPage1lmy53s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmy53s />
  </Suspense>
);

export { LazyPage1lmy53s };
