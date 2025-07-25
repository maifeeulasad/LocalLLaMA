import React, { lazy, Suspense } from 'react';

const Page1m83mu1 = lazy(() => import('./Page'));

const LazyPage1m83mu1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m83mu1 />
  </Suspense>
);

export { LazyPage1m83mu1 };
