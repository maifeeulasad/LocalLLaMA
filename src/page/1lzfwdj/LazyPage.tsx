import React, { lazy, Suspense } from 'react';

const Page1lzfwdj = lazy(() => import('./Page'));

const LazyPage1lzfwdj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzfwdj />
  </Suspense>
);

export { LazyPage1lzfwdj };
