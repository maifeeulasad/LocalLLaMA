import React, { lazy, Suspense } from 'react';

const Page1m6zz1v = lazy(() => import('./Page'));

const LazyPage1m6zz1v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6zz1v />
  </Suspense>
);

export { LazyPage1m6zz1v };
