import React, { lazy, Suspense } from 'react';

const Page1lwxr2l = lazy(() => import('./Page'));

const LazyPage1lwxr2l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwxr2l />
  </Suspense>
);

export { LazyPage1lwxr2l };
