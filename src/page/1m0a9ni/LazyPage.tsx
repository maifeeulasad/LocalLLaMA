import React, { lazy, Suspense } from 'react';

const Page1m0a9ni = lazy(() => import('./Page'));

const LazyPage1m0a9ni = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0a9ni />
  </Suspense>
);

export { LazyPage1m0a9ni };
