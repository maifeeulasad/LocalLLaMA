import React, { lazy, Suspense } from 'react';

const Page1mb2dcp = lazy(() => import('./Page'));

const LazyPage1mb2dcp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb2dcp />
  </Suspense>
);

export { LazyPage1mb2dcp };
