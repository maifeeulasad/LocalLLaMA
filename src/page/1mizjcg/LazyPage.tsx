import React, { lazy, Suspense } from 'react';

const Page1mizjcg = lazy(() => import('./Page'));

const LazyPage1mizjcg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizjcg />
  </Suspense>
);

export { LazyPage1mizjcg };
