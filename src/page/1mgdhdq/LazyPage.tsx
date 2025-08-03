import React, { lazy, Suspense } from 'react';

const Page1mgdhdq = lazy(() => import('./Page'));

const LazyPage1mgdhdq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgdhdq />
  </Suspense>
);

export { LazyPage1mgdhdq };
