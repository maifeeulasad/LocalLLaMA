import React, { lazy, Suspense } from 'react';

const Page1m321eo = lazy(() => import('./Page'));

const LazyPage1m321eo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m321eo />
  </Suspense>
);

export { LazyPage1m321eo };
