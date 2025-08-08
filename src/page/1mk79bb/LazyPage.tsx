import React, { lazy, Suspense } from 'react';

const Page1mk79bb = lazy(() => import('./Page'));

const LazyPage1mk79bb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk79bb />
  </Suspense>
);

export { LazyPage1mk79bb };
