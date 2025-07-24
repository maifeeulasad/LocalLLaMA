import React, { lazy, Suspense } from 'react';

const Page1m82rai = lazy(() => import('./Page'));

const LazyPage1m82rai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m82rai />
  </Suspense>
);

export { LazyPage1m82rai };
