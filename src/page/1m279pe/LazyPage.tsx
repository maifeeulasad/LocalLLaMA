import React, { lazy, Suspense } from 'react';

const Page1m279pe = lazy(() => import('./Page'));

const LazyPage1m279pe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m279pe />
  </Suspense>
);

export { LazyPage1m279pe };
