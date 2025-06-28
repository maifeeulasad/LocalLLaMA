import React, { lazy, Suspense } from 'react';

const Page1i8vclf = lazy(() => import('./Page'));

const LazyPage1i8vclf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i8vclf />
  </Suspense>
);

export { LazyPage1i8vclf };
