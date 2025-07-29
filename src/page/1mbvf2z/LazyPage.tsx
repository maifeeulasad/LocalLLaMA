import React, { lazy, Suspense } from 'react';

const Page1mbvf2z = lazy(() => import('./Page'));

const LazyPage1mbvf2z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbvf2z />
  </Suspense>
);

export { LazyPage1mbvf2z };
