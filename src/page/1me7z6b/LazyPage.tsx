import React, { lazy, Suspense } from 'react';

const Page1me7z6b = lazy(() => import('./Page'));

const LazyPage1me7z6b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me7z6b />
  </Suspense>
);

export { LazyPage1me7z6b };
