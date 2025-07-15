import React, { lazy, Suspense } from 'react';

const Page1m06nhe = lazy(() => import('./Page'));

const LazyPage1m06nhe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m06nhe />
  </Suspense>
);

export { LazyPage1m06nhe };
