import React, { lazy, Suspense } from 'react';

const Page1mgypja = lazy(() => import('./Page'));

const LazyPage1mgypja = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgypja />
  </Suspense>
);

export { LazyPage1mgypja };
