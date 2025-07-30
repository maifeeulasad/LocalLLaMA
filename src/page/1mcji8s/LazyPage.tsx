import React, { lazy, Suspense } from 'react';

const Page1mcji8s = lazy(() => import('./Page'));

const LazyPage1mcji8s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcji8s />
  </Suspense>
);

export { LazyPage1mcji8s };
