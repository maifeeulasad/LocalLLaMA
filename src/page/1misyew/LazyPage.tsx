import React, { lazy, Suspense } from 'react';

const Page1misyew = lazy(() => import('./Page'));

const LazyPage1misyew = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1misyew />
  </Suspense>
);

export { LazyPage1misyew };
