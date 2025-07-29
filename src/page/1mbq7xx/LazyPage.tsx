import React, { lazy, Suspense } from 'react';

const Page1mbq7xx = lazy(() => import('./Page'));

const LazyPage1mbq7xx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbq7xx />
  </Suspense>
);

export { LazyPage1mbq7xx };
