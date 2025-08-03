import React, { lazy, Suspense } from 'react';

const Page1mfzg8h = lazy(() => import('./Page'));

const LazyPage1mfzg8h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfzg8h />
  </Suspense>
);

export { LazyPage1mfzg8h };
