import React, { lazy, Suspense } from 'react';

const Page1m7xclf = lazy(() => import('./Page'));

const LazyPage1m7xclf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7xclf />
  </Suspense>
);

export { LazyPage1m7xclf };
