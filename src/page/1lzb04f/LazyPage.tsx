import React, { lazy, Suspense } from 'react';

const Page1lzb04f = lazy(() => import('./Page'));

const LazyPage1lzb04f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzb04f />
  </Suspense>
);

export { LazyPage1lzb04f };
