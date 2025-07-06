import React, { lazy, Suspense } from 'react';

const Page1ls66qt = lazy(() => import('./Page'));

const LazyPage1ls66qt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls66qt />
  </Suspense>
);

export { LazyPage1ls66qt };
