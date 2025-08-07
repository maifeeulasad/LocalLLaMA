import React, { lazy, Suspense } from 'react';

const Page1mjarwj = lazy(() => import('./Page'));

const LazyPage1mjarwj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjarwj />
  </Suspense>
);

export { LazyPage1mjarwj };
