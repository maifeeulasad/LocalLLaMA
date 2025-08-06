import React, { lazy, Suspense } from 'react';

const Page1miy64g = lazy(() => import('./Page'));

const LazyPage1miy64g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miy64g />
  </Suspense>
);

export { LazyPage1miy64g };
