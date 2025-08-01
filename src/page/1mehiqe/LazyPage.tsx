import React, { lazy, Suspense } from 'react';

const Page1mehiqe = lazy(() => import('./Page'));

const LazyPage1mehiqe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mehiqe />
  </Suspense>
);

export { LazyPage1mehiqe };
