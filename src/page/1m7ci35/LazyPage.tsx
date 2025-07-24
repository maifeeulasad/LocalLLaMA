import React, { lazy, Suspense } from 'react';

const Page1m7ci35 = lazy(() => import('./Page'));

const LazyPage1m7ci35 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ci35 />
  </Suspense>
);

export { LazyPage1m7ci35 };
