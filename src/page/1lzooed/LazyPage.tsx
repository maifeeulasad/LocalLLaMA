import React, { lazy, Suspense } from 'react';

const Page1lzooed = lazy(() => import('./Page'));

const LazyPage1lzooed = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzooed />
  </Suspense>
);

export { LazyPage1lzooed };
