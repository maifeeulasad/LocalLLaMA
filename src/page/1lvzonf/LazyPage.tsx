import React, { lazy, Suspense } from 'react';

const Page1lvzonf = lazy(() => import('./Page'));

const LazyPage1lvzonf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvzonf />
  </Suspense>
);

export { LazyPage1lvzonf };
