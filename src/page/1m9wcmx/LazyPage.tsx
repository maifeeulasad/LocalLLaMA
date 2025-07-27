import React, { lazy, Suspense } from 'react';

const Page1m9wcmx = lazy(() => import('./Page'));

const LazyPage1m9wcmx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9wcmx />
  </Suspense>
);

export { LazyPage1m9wcmx };
