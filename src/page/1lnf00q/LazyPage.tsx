import React, { lazy, Suspense } from 'react';

const Page1lnf00q = lazy(() => import('./Page'));

const LazyPage1lnf00q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnf00q />
  </Suspense>
);

export { LazyPage1lnf00q };
