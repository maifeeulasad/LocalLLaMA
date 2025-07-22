import React, { lazy, Suspense } from 'react';

const Page1m5ynit = lazy(() => import('./Page'));

const LazyPage1m5ynit = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ynit />
  </Suspense>
);

export { LazyPage1m5ynit };
