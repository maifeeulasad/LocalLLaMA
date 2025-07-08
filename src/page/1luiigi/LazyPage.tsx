import React, { lazy, Suspense } from 'react';

const Page1luiigi = lazy(() => import('./Page'));

const LazyPage1luiigi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luiigi />
  </Suspense>
);

export { LazyPage1luiigi };
