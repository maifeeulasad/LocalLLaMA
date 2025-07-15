import React, { lazy, Suspense } from 'react';

const Page1m0115d = lazy(() => import('./Page'));

const LazyPage1m0115d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0115d />
  </Suspense>
);

export { LazyPage1m0115d };
