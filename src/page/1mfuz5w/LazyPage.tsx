import React, { lazy, Suspense } from 'react';

const Page1mfuz5w = lazy(() => import('./Page'));

const LazyPage1mfuz5w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfuz5w />
  </Suspense>
);

export { LazyPage1mfuz5w };
