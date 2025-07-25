import React, { lazy, Suspense } from 'react';

const Page1m8h89j = lazy(() => import('./Page'));

const LazyPage1m8h89j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8h89j />
  </Suspense>
);

export { LazyPage1m8h89j };
