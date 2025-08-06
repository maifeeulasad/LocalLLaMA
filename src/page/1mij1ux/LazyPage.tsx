import React, { lazy, Suspense } from 'react';

const Page1mij1ux = lazy(() => import('./Page'));

const LazyPage1mij1ux = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mij1ux />
  </Suspense>
);

export { LazyPage1mij1ux };
