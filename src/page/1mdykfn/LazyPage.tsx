import React, { lazy, Suspense } from 'react';

const Page1mdykfn = lazy(() => import('./Page'));

const LazyPage1mdykfn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdykfn />
  </Suspense>
);

export { LazyPage1mdykfn };
