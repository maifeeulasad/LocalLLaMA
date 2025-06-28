import React, { lazy, Suspense } from 'react';

const Page1iji47x = lazy(() => import('./Page'));

const LazyPage1iji47x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iji47x />
  </Suspense>
);

export { LazyPage1iji47x };
