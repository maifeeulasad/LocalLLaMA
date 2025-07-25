import React, { lazy, Suspense } from 'react';

const Page1m8oc9j = lazy(() => import('./Page'));

const LazyPage1m8oc9j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8oc9j />
  </Suspense>
);

export { LazyPage1m8oc9j };
