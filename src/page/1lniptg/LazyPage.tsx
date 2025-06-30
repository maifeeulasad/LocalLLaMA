import React, { lazy, Suspense } from 'react';

const Page1lniptg = lazy(() => import('./Page'));

const LazyPage1lniptg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lniptg />
  </Suspense>
);

export { LazyPage1lniptg };
