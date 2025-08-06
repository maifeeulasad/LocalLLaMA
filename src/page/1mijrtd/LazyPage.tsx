import React, { lazy, Suspense } from 'react';

const Page1mijrtd = lazy(() => import('./Page'));

const LazyPage1mijrtd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijrtd />
  </Suspense>
);

export { LazyPage1mijrtd };
