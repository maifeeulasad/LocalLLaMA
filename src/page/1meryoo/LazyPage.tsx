import React, { lazy, Suspense } from 'react';

const Page1meryoo = lazy(() => import('./Page'));

const LazyPage1meryoo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meryoo />
  </Suspense>
);

export { LazyPage1meryoo };
