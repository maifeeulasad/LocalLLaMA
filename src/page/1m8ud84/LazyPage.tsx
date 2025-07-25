import React, { lazy, Suspense } from 'react';

const Page1m8ud84 = lazy(() => import('./Page'));

const LazyPage1m8ud84 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8ud84 />
  </Suspense>
);

export { LazyPage1m8ud84 };
