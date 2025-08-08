import React, { lazy, Suspense } from 'react';

const Page1mkhrs7 = lazy(() => import('./Page'));

const LazyPage1mkhrs7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkhrs7 />
  </Suspense>
);

export { LazyPage1mkhrs7 };
