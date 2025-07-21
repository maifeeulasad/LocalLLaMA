import React, { lazy, Suspense } from 'react';

const Page1m4s9nn = lazy(() => import('./Page'));

const LazyPage1m4s9nn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4s9nn />
  </Suspense>
);

export { LazyPage1m4s9nn };
