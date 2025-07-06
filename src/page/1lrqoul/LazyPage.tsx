import React, { lazy, Suspense } from 'react';

const Page1lrqoul = lazy(() => import('./Page'));

const LazyPage1lrqoul = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrqoul />
  </Suspense>
);

export { LazyPage1lrqoul };
