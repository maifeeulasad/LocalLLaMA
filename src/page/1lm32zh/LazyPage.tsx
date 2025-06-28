import React, { lazy, Suspense } from 'react';

const Page1lm32zh = lazy(() => import('./Page'));

const LazyPage1lm32zh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm32zh />
  </Suspense>
);

export { LazyPage1lm32zh };
