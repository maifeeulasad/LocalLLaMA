import React, { lazy, Suspense } from 'react';

const Page1mf1bab = lazy(() => import('./Page'));

const LazyPage1mf1bab = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf1bab />
  </Suspense>
);

export { LazyPage1mf1bab };
