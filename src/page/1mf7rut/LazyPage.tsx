import React, { lazy, Suspense } from 'react';

const Page1mf7rut = lazy(() => import('./Page'));

const LazyPage1mf7rut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7rut />
  </Suspense>
);

export { LazyPage1mf7rut };
