import React, { lazy, Suspense } from 'react';

const Page1m7c3ir = lazy(() => import('./Page'));

const LazyPage1m7c3ir = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7c3ir />
  </Suspense>
);

export { LazyPage1m7c3ir };
