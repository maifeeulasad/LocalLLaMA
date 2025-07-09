import React, { lazy, Suspense } from 'react';

const Page1lvex1e = lazy(() => import('./Page'));

const LazyPage1lvex1e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvex1e />
  </Suspense>
);

export { LazyPage1lvex1e };
