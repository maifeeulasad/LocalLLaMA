import React, { lazy, Suspense } from 'react';

const Page1lq3urv = lazy(() => import('./Page'));

const LazyPage1lq3urv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq3urv />
  </Suspense>
);

export { LazyPage1lq3urv };
