import React, { lazy, Suspense } from 'react';

const Page1m10y6t = lazy(() => import('./Page'));

const LazyPage1m10y6t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m10y6t />
  </Suspense>
);

export { LazyPage1m10y6t };
