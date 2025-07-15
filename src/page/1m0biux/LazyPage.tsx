import React, { lazy, Suspense } from 'react';

const Page1m0biux = lazy(() => import('./Page'));

const LazyPage1m0biux = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0biux />
  </Suspense>
);

export { LazyPage1m0biux };
