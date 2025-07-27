import React, { lazy, Suspense } from 'react';

const Page1ma8jks = lazy(() => import('./Page'));

const LazyPage1ma8jks = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma8jks />
  </Suspense>
);

export { LazyPage1ma8jks };
