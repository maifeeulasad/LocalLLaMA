import React, { lazy, Suspense } from 'react';

const Page1mejvkn = lazy(() => import('./Page'));

const LazyPage1mejvkn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mejvkn />
  </Suspense>
);

export { LazyPage1mejvkn };
