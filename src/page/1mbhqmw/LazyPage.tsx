import React, { lazy, Suspense } from 'react';

const Page1mbhqmw = lazy(() => import('./Page'));

const LazyPage1mbhqmw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbhqmw />
  </Suspense>
);

export { LazyPage1mbhqmw };
