import React, { lazy, Suspense } from 'react';

const Page1m39n48 = lazy(() => import('./Page'));

const LazyPage1m39n48 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m39n48 />
  </Suspense>
);

export { LazyPage1m39n48 };
