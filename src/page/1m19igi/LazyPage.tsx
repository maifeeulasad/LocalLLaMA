import React, { lazy, Suspense } from 'react';

const Page1m19igi = lazy(() => import('./Page'));

const LazyPage1m19igi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m19igi />
  </Suspense>
);

export { LazyPage1m19igi };
