import React, { lazy, Suspense } from 'react';

const Page1m73yrb = lazy(() => import('./Page'));

const LazyPage1m73yrb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m73yrb />
  </Suspense>
);

export { LazyPage1m73yrb };
