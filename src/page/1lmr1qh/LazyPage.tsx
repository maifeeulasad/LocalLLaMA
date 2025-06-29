import React, { lazy, Suspense } from 'react';

const Page1lmr1qh = lazy(() => import('./Page'));

const LazyPage1lmr1qh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmr1qh />
  </Suspense>
);

export { LazyPage1lmr1qh };
