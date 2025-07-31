import React, { lazy, Suspense } from 'react';

const Page1mdoqnv = lazy(() => import('./Page'));

const LazyPage1mdoqnv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdoqnv />
  </Suspense>
);

export { LazyPage1mdoqnv };
