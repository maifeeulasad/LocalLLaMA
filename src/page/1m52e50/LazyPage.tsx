import React, { lazy, Suspense } from 'react';

const Page1m52e50 = lazy(() => import('./Page'));

const LazyPage1m52e50 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m52e50 />
  </Suspense>
);

export { LazyPage1m52e50 };
