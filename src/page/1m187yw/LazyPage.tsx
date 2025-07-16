import React, { lazy, Suspense } from 'react';

const Page1m187yw = lazy(() => import('./Page'));

const LazyPage1m187yw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m187yw />
  </Suspense>
);

export { LazyPage1m187yw };
