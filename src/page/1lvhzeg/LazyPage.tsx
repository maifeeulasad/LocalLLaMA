import React, { lazy, Suspense } from 'react';

const Page1lvhzeg = lazy(() => import('./Page'));

const LazyPage1lvhzeg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvhzeg />
  </Suspense>
);

export { LazyPage1lvhzeg };
