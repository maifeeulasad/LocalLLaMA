import React, { lazy, Suspense } from 'react';

const Page1lo4qxf = lazy(() => import('./Page'));

const LazyPage1lo4qxf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo4qxf />
  </Suspense>
);

export { LazyPage1lo4qxf };
