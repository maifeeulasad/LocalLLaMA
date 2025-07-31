import React, { lazy, Suspense } from 'react';

const Page1mdaoxi = lazy(() => import('./Page'));

const LazyPage1mdaoxi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdaoxi />
  </Suspense>
);

export { LazyPage1mdaoxi };
