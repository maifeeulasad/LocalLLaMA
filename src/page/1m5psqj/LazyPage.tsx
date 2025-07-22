import React, { lazy, Suspense } from 'react';

const Page1m5psqj = lazy(() => import('./Page'));

const LazyPage1m5psqj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5psqj />
  </Suspense>
);

export { LazyPage1m5psqj };
