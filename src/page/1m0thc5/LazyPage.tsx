import React, { lazy, Suspense } from 'react';

const Page1m0thc5 = lazy(() => import('./Page'));

const LazyPage1m0thc5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0thc5 />
  </Suspense>
);

export { LazyPage1m0thc5 };
