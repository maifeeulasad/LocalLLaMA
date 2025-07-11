import React, { lazy, Suspense } from 'react';

const Page1lwr8eh = lazy(() => import('./Page'));

const LazyPage1lwr8eh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwr8eh />
  </Suspense>
);

export { LazyPage1lwr8eh };
