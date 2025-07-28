import React, { lazy, Suspense } from 'react';

const Page1mbcwek = lazy(() => import('./Page'));

const LazyPage1mbcwek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbcwek />
  </Suspense>
);

export { LazyPage1mbcwek };
