import React, { lazy, Suspense } from 'react';

const Page1mi1wwr = lazy(() => import('./Page'));

const LazyPage1mi1wwr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi1wwr />
  </Suspense>
);

export { LazyPage1mi1wwr };
