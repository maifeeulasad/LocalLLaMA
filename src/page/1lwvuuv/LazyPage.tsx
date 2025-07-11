import React, { lazy, Suspense } from 'react';

const Page1lwvuuv = lazy(() => import('./Page'));

const LazyPage1lwvuuv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwvuuv />
  </Suspense>
);

export { LazyPage1lwvuuv };
