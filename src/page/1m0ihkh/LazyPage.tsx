import React, { lazy, Suspense } from 'react';

const Page1m0ihkh = lazy(() => import('./Page'));

const LazyPage1m0ihkh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0ihkh />
  </Suspense>
);

export { LazyPage1m0ihkh };
