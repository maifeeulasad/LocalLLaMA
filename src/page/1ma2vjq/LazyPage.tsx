import React, { lazy, Suspense } from 'react';

const Page1ma2vjq = lazy(() => import('./Page'));

const LazyPage1ma2vjq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma2vjq />
  </Suspense>
);

export { LazyPage1ma2vjq };
