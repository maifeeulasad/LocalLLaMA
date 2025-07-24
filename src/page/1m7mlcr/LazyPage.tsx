import React, { lazy, Suspense } from 'react';

const Page1m7mlcr = lazy(() => import('./Page'));

const LazyPage1m7mlcr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7mlcr />
  </Suspense>
);

export { LazyPage1m7mlcr };
