import React, { lazy, Suspense } from 'react';

const Page1luevql = lazy(() => import('./Page'));

const LazyPage1luevql = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luevql />
  </Suspense>
);

export { LazyPage1luevql };
