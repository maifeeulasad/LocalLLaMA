import React, { lazy, Suspense } from 'react';

const Page1lmf42g = lazy(() => import('./Page'));

const LazyPage1lmf42g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmf42g />
  </Suspense>
);

export { LazyPage1lmf42g };
