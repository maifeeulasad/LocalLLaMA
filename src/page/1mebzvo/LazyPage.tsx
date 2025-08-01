import React, { lazy, Suspense } from 'react';

const Page1mebzvo = lazy(() => import('./Page'));

const LazyPage1mebzvo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mebzvo />
  </Suspense>
);

export { LazyPage1mebzvo };
