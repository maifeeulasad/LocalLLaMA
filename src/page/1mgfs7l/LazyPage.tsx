import React, { lazy, Suspense } from 'react';

const Page1mgfs7l = lazy(() => import('./Page'));

const LazyPage1mgfs7l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgfs7l />
  </Suspense>
);

export { LazyPage1mgfs7l };
