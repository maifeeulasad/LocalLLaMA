import React, { lazy, Suspense } from 'react';

const Page1m59xzv = lazy(() => import('./Page'));

const LazyPage1m59xzv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m59xzv />
  </Suspense>
);

export { LazyPage1m59xzv };
