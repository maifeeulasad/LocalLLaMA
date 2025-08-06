import React, { lazy, Suspense } from 'react';

const Page1mijros = lazy(() => import('./Page'));

const LazyPage1mijros = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mijros />
  </Suspense>
);

export { LazyPage1mijros };
