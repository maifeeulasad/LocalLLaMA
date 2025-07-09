import React, { lazy, Suspense } from 'react';

const Page1lveslz = lazy(() => import('./Page'));

const LazyPage1lveslz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lveslz />
  </Suspense>
);

export { LazyPage1lveslz };
