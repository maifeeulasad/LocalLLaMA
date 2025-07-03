import React, { lazy, Suspense } from 'react';

const Page1lq3tuu = lazy(() => import('./Page'));

const LazyPage1lq3tuu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq3tuu />
  </Suspense>
);

export { LazyPage1lq3tuu };
