import React, { lazy, Suspense } from 'react';

const Page1lzrqoi = lazy(() => import('./Page'));

const LazyPage1lzrqoi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzrqoi />
  </Suspense>
);

export { LazyPage1lzrqoi };
