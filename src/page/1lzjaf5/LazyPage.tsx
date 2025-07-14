import React, { lazy, Suspense } from 'react';

const Page1lzjaf5 = lazy(() => import('./Page'));

const LazyPage1lzjaf5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzjaf5 />
  </Suspense>
);

export { LazyPage1lzjaf5 };
