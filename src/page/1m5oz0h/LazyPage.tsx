import React, { lazy, Suspense } from 'react';

const Page1m5oz0h = lazy(() => import('./Page'));

const LazyPage1m5oz0h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5oz0h />
  </Suspense>
);

export { LazyPage1m5oz0h };
