import React, { lazy, Suspense } from 'react';

const Page1m7ci3s = lazy(() => import('./Page'));

const LazyPage1m7ci3s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ci3s />
  </Suspense>
);

export { LazyPage1m7ci3s };
