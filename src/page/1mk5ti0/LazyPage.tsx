import React, { lazy, Suspense } from 'react';

const Page1mk5ti0 = lazy(() => import('./Page'));

const LazyPage1mk5ti0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk5ti0 />
  </Suspense>
);

export { LazyPage1mk5ti0 };
