import React, { lazy, Suspense } from 'react';

const Page1mbdtw8 = lazy(() => import('./Page'));

const LazyPage1mbdtw8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbdtw8 />
  </Suspense>
);

export { LazyPage1mbdtw8 };
