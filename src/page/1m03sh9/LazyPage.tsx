import React, { lazy, Suspense } from 'react';

const Page1m03sh9 = lazy(() => import('./Page'));

const LazyPage1m03sh9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m03sh9 />
  </Suspense>
);

export { LazyPage1m03sh9 };
