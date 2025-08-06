import React, { lazy, Suspense } from 'react';

const Page1miuwyb = lazy(() => import('./Page'));

const LazyPage1miuwyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miuwyb />
  </Suspense>
);

export { LazyPage1miuwyb };
