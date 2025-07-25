import React, { lazy, Suspense } from 'react';

const Page1m85v3a = lazy(() => import('./Page'));

const LazyPage1m85v3a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m85v3a />
  </Suspense>
);

export { LazyPage1m85v3a };
