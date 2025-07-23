import React, { lazy, Suspense } from 'react';

const Page1m76df6 = lazy(() => import('./Page'));

const LazyPage1m76df6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m76df6 />
  </Suspense>
);

export { LazyPage1m76df6 };
