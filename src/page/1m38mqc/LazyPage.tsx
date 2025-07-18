import React, { lazy, Suspense } from 'react';

const Page1m38mqc = lazy(() => import('./Page'));

const LazyPage1m38mqc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m38mqc />
  </Suspense>
);

export { LazyPage1m38mqc };
