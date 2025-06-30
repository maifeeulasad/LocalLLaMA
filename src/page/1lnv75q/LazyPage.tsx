import React, { lazy, Suspense } from 'react';

const Page1lnv75q = lazy(() => import('./Page'));

const LazyPage1lnv75q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnv75q />
  </Suspense>
);

export { LazyPage1lnv75q };
