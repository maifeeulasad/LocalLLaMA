import React, { lazy, Suspense } from 'react';

const Page1m0p3bh = lazy(() => import('./Page'));

const LazyPage1m0p3bh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0p3bh />
  </Suspense>
);

export { LazyPage1m0p3bh };
