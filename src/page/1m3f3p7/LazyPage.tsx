import React, { lazy, Suspense } from 'react';

const Page1m3f3p7 = lazy(() => import('./Page'));

const LazyPage1m3f3p7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3f3p7 />
  </Suspense>
);

export { LazyPage1m3f3p7 };
