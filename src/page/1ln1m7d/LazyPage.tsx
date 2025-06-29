import React, { lazy, Suspense } from 'react';

const Page1ln1m7d = lazy(() => import('./Page'));

const LazyPage1ln1m7d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln1m7d />
  </Suspense>
);

export { LazyPage1ln1m7d };
