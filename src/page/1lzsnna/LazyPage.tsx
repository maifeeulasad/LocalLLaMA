import React, { lazy, Suspense } from 'react';

const Page1lzsnna = lazy(() => import('./Page'));

const LazyPage1lzsnna = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzsnna />
  </Suspense>
);

export { LazyPage1lzsnna };
