import React, { lazy, Suspense } from 'react';

const Page1ln5l6b = lazy(() => import('./Page'));

const LazyPage1ln5l6b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln5l6b />
  </Suspense>
);

export { LazyPage1ln5l6b };
