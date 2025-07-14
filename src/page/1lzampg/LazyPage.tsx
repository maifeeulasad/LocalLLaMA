import React, { lazy, Suspense } from 'react';

const Page1lzampg = lazy(() => import('./Page'));

const LazyPage1lzampg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzampg />
  </Suspense>
);

export { LazyPage1lzampg };
