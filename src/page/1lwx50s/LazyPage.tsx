import React, { lazy, Suspense } from 'react';

const Page1lwx50s = lazy(() => import('./Page'));

const LazyPage1lwx50s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwx50s />
  </Suspense>
);

export { LazyPage1lwx50s };
