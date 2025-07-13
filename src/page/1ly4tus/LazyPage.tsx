import React, { lazy, Suspense } from 'react';

const Page1ly4tus = lazy(() => import('./Page'));

const LazyPage1ly4tus = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly4tus />
  </Suspense>
);

export { LazyPage1ly4tus };
