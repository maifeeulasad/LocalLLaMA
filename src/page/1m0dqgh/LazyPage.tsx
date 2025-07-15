import React, { lazy, Suspense } from 'react';

const Page1m0dqgh = lazy(() => import('./Page'));

const LazyPage1m0dqgh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0dqgh />
  </Suspense>
);

export { LazyPage1m0dqgh };
