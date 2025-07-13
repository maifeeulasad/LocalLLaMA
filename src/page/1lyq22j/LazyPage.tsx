import React, { lazy, Suspense } from 'react';

const Page1lyq22j = lazy(() => import('./Page'));

const LazyPage1lyq22j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyq22j />
  </Suspense>
);

export { LazyPage1lyq22j };
