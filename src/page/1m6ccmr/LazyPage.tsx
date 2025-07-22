import React, { lazy, Suspense } from 'react';

const Page1m6ccmr = lazy(() => import('./Page'));

const LazyPage1m6ccmr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ccmr />
  </Suspense>
);

export { LazyPage1m6ccmr };
