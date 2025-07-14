import React, { lazy, Suspense } from 'react';

const Page1lzijk2 = lazy(() => import('./Page'));

const LazyPage1lzijk2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzijk2 />
  </Suspense>
);

export { LazyPage1lzijk2 };
