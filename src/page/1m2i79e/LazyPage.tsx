import React, { lazy, Suspense } from 'react';

const Page1m2i79e = lazy(() => import('./Page'));

const LazyPage1m2i79e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2i79e />
  </Suspense>
);

export { LazyPage1m2i79e };
