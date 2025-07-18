import React, { lazy, Suspense } from 'react';

const Page1m390kj = lazy(() => import('./Page'));

const LazyPage1m390kj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m390kj />
  </Suspense>
);

export { LazyPage1m390kj };
