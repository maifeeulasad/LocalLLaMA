import React, { lazy, Suspense } from 'react';

const Page1ln8uqb = lazy(() => import('./Page'));

const LazyPage1ln8uqb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln8uqb />
  </Suspense>
);

export { LazyPage1ln8uqb };
