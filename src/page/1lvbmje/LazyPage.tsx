import React, { lazy, Suspense } from 'react';

const Page1lvbmje = lazy(() => import('./Page'));

const LazyPage1lvbmje = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvbmje />
  </Suspense>
);

export { LazyPage1lvbmje };
