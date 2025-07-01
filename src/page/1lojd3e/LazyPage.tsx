import React, { lazy, Suspense } from 'react';

const Page1lojd3e = lazy(() => import('./Page'));

const LazyPage1lojd3e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lojd3e />
  </Suspense>
);

export { LazyPage1lojd3e };
