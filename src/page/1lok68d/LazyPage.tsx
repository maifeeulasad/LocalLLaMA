import React, { lazy, Suspense } from 'react';

const Page1lok68d = lazy(() => import('./Page'));

const LazyPage1lok68d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lok68d />
  </Suspense>
);

export { LazyPage1lok68d };
