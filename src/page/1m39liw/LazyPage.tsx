import React, { lazy, Suspense } from 'react';

const Page1m39liw = lazy(() => import('./Page'));

const LazyPage1m39liw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m39liw />
  </Suspense>
);

export { LazyPage1m39liw };
