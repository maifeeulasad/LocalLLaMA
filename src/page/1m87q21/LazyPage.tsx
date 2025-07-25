import React, { lazy, Suspense } from 'react';

const Page1m87q21 = lazy(() => import('./Page'));

const LazyPage1m87q21 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m87q21 />
  </Suspense>
);

export { LazyPage1m87q21 };
