import React, { lazy, Suspense } from 'react';

const Page1lzz13f = lazy(() => import('./Page'));

const LazyPage1lzz13f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzz13f />
  </Suspense>
);

export { LazyPage1lzz13f };
