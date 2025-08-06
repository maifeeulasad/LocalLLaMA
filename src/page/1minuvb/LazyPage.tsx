import React, { lazy, Suspense } from 'react';

const Page1minuvb = lazy(() => import('./Page'));

const LazyPage1minuvb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minuvb />
  </Suspense>
);

export { LazyPage1minuvb };
