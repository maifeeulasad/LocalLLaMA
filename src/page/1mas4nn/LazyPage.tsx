import React, { lazy, Suspense } from 'react';

const Page1mas4nn = lazy(() => import('./Page'));

const LazyPage1mas4nn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mas4nn />
  </Suspense>
);

export { LazyPage1mas4nn };
