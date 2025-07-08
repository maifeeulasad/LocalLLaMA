import React, { lazy, Suspense } from 'react';

const Page1lubdcg = lazy(() => import('./Page'));

const LazyPage1lubdcg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lubdcg />
  </Suspense>
);

export { LazyPage1lubdcg };
