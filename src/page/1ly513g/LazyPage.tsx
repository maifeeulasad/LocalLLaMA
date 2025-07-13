import React, { lazy, Suspense } from 'react';

const Page1ly513g = lazy(() => import('./Page'));

const LazyPage1ly513g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly513g />
  </Suspense>
);

export { LazyPage1ly513g };
