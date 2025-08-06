import React, { lazy, Suspense } from 'react';

const Page1mixmtg = lazy(() => import('./Page'));

const LazyPage1mixmtg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mixmtg />
  </Suspense>
);

export { LazyPage1mixmtg };
