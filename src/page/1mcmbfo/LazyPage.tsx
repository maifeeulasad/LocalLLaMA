import React, { lazy, Suspense } from 'react';

const Page1mcmbfo = lazy(() => import('./Page'));

const LazyPage1mcmbfo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcmbfo />
  </Suspense>
);

export { LazyPage1mcmbfo };
