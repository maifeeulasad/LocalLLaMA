import React, { lazy, Suspense } from 'react';

const Page1m4d74b = lazy(() => import('./Page'));

const LazyPage1m4d74b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4d74b />
  </Suspense>
);

export { LazyPage1m4d74b };
