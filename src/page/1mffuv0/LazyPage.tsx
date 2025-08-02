import React, { lazy, Suspense } from 'react';

const Page1mffuv0 = lazy(() => import('./Page'));

const LazyPage1mffuv0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mffuv0 />
  </Suspense>
);

export { LazyPage1mffuv0 };
