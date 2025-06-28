import React, { lazy, Suspense } from 'react';

const Page1io2ija = lazy(() => import('./Page'));

const LazyPage1io2ija = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1io2ija />
  </Suspense>
);

export { LazyPage1io2ija };
