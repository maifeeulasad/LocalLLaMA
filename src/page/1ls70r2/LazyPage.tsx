import React, { lazy, Suspense } from 'react';

const Page1ls70r2 = lazy(() => import('./Page'));

const LazyPage1ls70r2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls70r2 />
  </Suspense>
);

export { LazyPage1ls70r2 };
