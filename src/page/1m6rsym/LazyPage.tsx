import React, { lazy, Suspense } from 'react';

const Page1m6rsym = lazy(() => import('./Page'));

const LazyPage1m6rsym = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6rsym />
  </Suspense>
);

export { LazyPage1m6rsym };
