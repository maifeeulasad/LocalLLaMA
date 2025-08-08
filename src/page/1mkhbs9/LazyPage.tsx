import React, { lazy, Suspense } from 'react';

const Page1mkhbs9 = lazy(() => import('./Page'));

const LazyPage1mkhbs9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkhbs9 />
  </Suspense>
);

export { LazyPage1mkhbs9 };
