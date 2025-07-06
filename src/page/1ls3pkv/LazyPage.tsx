import React, { lazy, Suspense } from 'react';

const Page1ls3pkv = lazy(() => import('./Page'));

const LazyPage1ls3pkv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls3pkv />
  </Suspense>
);

export { LazyPage1ls3pkv };
