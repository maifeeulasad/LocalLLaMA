import React, { lazy, Suspense } from 'react';

const Page1m7tb9b = lazy(() => import('./Page'));

const LazyPage1m7tb9b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7tb9b />
  </Suspense>
);

export { LazyPage1m7tb9b };
