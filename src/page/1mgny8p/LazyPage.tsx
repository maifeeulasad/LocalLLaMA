import React, { lazy, Suspense } from 'react';

const Page1mgny8p = lazy(() => import('./Page'));

const LazyPage1mgny8p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgny8p />
  </Suspense>
);

export { LazyPage1mgny8p };
