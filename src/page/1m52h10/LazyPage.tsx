import React, { lazy, Suspense } from 'react';

const Page1m52h10 = lazy(() => import('./Page'));

const LazyPage1m52h10 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m52h10 />
  </Suspense>
);

export { LazyPage1m52h10 };
