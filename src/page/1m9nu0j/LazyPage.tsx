import React, { lazy, Suspense } from 'react';

const Page1m9nu0j = lazy(() => import('./Page'));

const LazyPage1m9nu0j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9nu0j />
  </Suspense>
);

export { LazyPage1m9nu0j };
