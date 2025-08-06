import React, { lazy, Suspense } from 'react';

const Page1mj011h = lazy(() => import('./Page'));

const LazyPage1mj011h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj011h />
  </Suspense>
);

export { LazyPage1mj011h };
