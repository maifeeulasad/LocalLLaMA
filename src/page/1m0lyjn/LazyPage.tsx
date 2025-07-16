import React, { lazy, Suspense } from 'react';

const Page1m0lyjn = lazy(() => import('./Page'));

const LazyPage1m0lyjn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0lyjn />
  </Suspense>
);

export { LazyPage1m0lyjn };
