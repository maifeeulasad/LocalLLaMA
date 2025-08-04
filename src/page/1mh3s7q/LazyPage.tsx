import React, { lazy, Suspense } from 'react';

const Page1mh3s7q = lazy(() => import('./Page'));

const LazyPage1mh3s7q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mh3s7q />
  </Suspense>
);

export { LazyPage1mh3s7q };
