import React, { lazy, Suspense } from 'react';

const Page1lmbt6g = lazy(() => import('./Page'));

const LazyPage1lmbt6g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmbt6g />
  </Suspense>
);

export { LazyPage1lmbt6g };
