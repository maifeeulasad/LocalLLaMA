import React, { lazy, Suspense } from 'react';

const Page1lzts1z = lazy(() => import('./Page'));

const LazyPage1lzts1z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzts1z />
  </Suspense>
);

export { LazyPage1lzts1z };
