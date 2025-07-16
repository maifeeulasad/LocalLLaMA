import React, { lazy, Suspense } from 'react';

const Page1m0k22v = lazy(() => import('./Page'));

const LazyPage1m0k22v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0k22v />
  </Suspense>
);

export { LazyPage1m0k22v };
