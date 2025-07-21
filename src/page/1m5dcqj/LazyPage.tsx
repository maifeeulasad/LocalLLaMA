import React, { lazy, Suspense } from 'react';

const Page1m5dcqj = lazy(() => import('./Page'));

const LazyPage1m5dcqj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5dcqj />
  </Suspense>
);

export { LazyPage1m5dcqj };
