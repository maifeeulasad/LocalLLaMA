import React, { lazy, Suspense } from 'react';

const Page1lzx039 = lazy(() => import('./Page'));

const LazyPage1lzx039 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzx039 />
  </Suspense>
);

export { LazyPage1lzx039 };
