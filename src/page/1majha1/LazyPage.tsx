import React, { lazy, Suspense } from 'react';

const Page1majha1 = lazy(() => import('./Page'));

const LazyPage1majha1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1majha1 />
  </Suspense>
);

export { LazyPage1majha1 };
