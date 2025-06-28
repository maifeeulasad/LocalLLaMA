import React, { lazy, Suspense } from 'react';

const Page1lmix4b = lazy(() => import('./Page'));

const LazyPage1lmix4b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmix4b />
  </Suspense>
);

export { LazyPage1lmix4b };
