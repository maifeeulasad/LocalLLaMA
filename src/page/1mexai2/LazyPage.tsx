import React, { lazy, Suspense } from 'react';

const Page1mexai2 = lazy(() => import('./Page'));

const LazyPage1mexai2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mexai2 />
  </Suspense>
);

export { LazyPage1mexai2 };
