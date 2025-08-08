import React, { lazy, Suspense } from 'react';

const Page1mk6r3t = lazy(() => import('./Page'));

const LazyPage1mk6r3t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk6r3t />
  </Suspense>
);

export { LazyPage1mk6r3t };
