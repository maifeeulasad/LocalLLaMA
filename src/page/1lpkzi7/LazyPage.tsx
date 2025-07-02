import React, { lazy, Suspense } from 'react';

const Page1lpkzi7 = lazy(() => import('./Page'));

const LazyPage1lpkzi7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpkzi7 />
  </Suspense>
);

export { LazyPage1lpkzi7 };
