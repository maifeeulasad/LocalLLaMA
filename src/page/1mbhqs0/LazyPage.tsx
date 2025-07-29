import React, { lazy, Suspense } from 'react';

const Page1mbhqs0 = lazy(() => import('./Page'));

const LazyPage1mbhqs0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbhqs0 />
  </Suspense>
);

export { LazyPage1mbhqs0 };
