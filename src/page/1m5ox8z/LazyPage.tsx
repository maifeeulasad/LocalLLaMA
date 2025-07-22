import React, { lazy, Suspense } from 'react';

const Page1m5ox8z = lazy(() => import('./Page'));

const LazyPage1m5ox8z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ox8z />
  </Suspense>
);

export { LazyPage1m5ox8z };
