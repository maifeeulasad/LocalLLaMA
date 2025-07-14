import React, { lazy, Suspense } from 'react';

const Page1lze1r3 = lazy(() => import('./Page'));

const LazyPage1lze1r3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lze1r3 />
  </Suspense>
);

export { LazyPage1lze1r3 };
