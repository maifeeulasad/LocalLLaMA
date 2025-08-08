import React, { lazy, Suspense } from 'react';

const Page1mk916s = lazy(() => import('./Page'));

const LazyPage1mk916s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk916s />
  </Suspense>
);

export { LazyPage1mk916s };
