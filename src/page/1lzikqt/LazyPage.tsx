import React, { lazy, Suspense } from 'react';

const Page1lzikqt = lazy(() => import('./Page'));

const LazyPage1lzikqt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzikqt />
  </Suspense>
);

export { LazyPage1lzikqt };
