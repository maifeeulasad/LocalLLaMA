import React, { lazy, Suspense } from 'react';

const Page1m67e6a = lazy(() => import('./Page'));

const LazyPage1m67e6a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m67e6a />
  </Suspense>
);

export { LazyPage1m67e6a };
