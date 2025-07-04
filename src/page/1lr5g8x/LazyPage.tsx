import React, { lazy, Suspense } from 'react';

const Page1lr5g8x = lazy(() => import('./Page'));

const LazyPage1lr5g8x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr5g8x />
  </Suspense>
);

export { LazyPage1lr5g8x };
