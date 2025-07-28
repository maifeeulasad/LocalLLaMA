import React, { lazy, Suspense } from 'react';

const Page1mb7gxu = lazy(() => import('./Page'));

const LazyPage1mb7gxu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb7gxu />
  </Suspense>
);

export { LazyPage1mb7gxu };
