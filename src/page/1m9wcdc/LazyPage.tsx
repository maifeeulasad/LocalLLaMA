import React, { lazy, Suspense } from 'react';

const Page1m9wcdc = lazy(() => import('./Page'));

const LazyPage1m9wcdc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9wcdc />
  </Suspense>
);

export { LazyPage1m9wcdc };
