import React, { lazy, Suspense } from 'react';

const Page1mbm4a0 = lazy(() => import('./Page'));

const LazyPage1mbm4a0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbm4a0 />
  </Suspense>
);

export { LazyPage1mbm4a0 };
