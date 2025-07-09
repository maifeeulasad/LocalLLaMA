import React, { lazy, Suspense } from 'react';

const Page1lvh4ou = lazy(() => import('./Page'));

const LazyPage1lvh4ou = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvh4ou />
  </Suspense>
);

export { LazyPage1lvh4ou };
