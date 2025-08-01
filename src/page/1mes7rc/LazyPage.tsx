import React, { lazy, Suspense } from 'react';

const Page1mes7rc = lazy(() => import('./Page'));

const LazyPage1mes7rc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mes7rc />
  </Suspense>
);

export { LazyPage1mes7rc };
