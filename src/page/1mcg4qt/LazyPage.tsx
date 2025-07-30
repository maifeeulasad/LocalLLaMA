import React, { lazy, Suspense } from 'react';

const Page1mcg4qt = lazy(() => import('./Page'));

const LazyPage1mcg4qt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcg4qt />
  </Suspense>
);

export { LazyPage1mcg4qt };
