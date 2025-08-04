import React, { lazy, Suspense } from 'react';

const Page1mgjlek = lazy(() => import('./Page'));

const LazyPage1mgjlek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgjlek />
  </Suspense>
);

export { LazyPage1mgjlek };
