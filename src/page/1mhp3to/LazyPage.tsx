import React, { lazy, Suspense } from 'react';

const Page1mhp3to = lazy(() => import('./Page'));

const LazyPage1mhp3to = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhp3to />
  </Suspense>
);

export { LazyPage1mhp3to };
