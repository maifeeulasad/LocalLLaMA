import React, { lazy, Suspense } from 'react';

const Page1lwfn7n = lazy(() => import('./Page'));

const LazyPage1lwfn7n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwfn7n />
  </Suspense>
);

export { LazyPage1lwfn7n };
