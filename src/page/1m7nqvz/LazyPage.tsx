import React, { lazy, Suspense } from 'react';

const Page1m7nqvz = lazy(() => import('./Page'));

const LazyPage1m7nqvz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7nqvz />
  </Suspense>
);

export { LazyPage1m7nqvz };
