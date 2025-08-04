import React, { lazy, Suspense } from 'react';

const Page1mh9r0z = lazy(() => import('./Page'));

const LazyPage1mh9r0z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh9r0z />
  </Suspense>
);

export { LazyPage1mh9r0z };
