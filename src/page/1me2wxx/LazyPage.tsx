import React, { lazy, Suspense } from 'react';

const Page1me2wxx = lazy(() => import('./Page'));

const LazyPage1me2wxx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me2wxx />
  </Suspense>
);

export { LazyPage1me2wxx };
