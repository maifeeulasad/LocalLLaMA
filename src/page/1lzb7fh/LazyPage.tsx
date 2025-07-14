import React, { lazy, Suspense } from 'react';

const Page1lzb7fh = lazy(() => import('./Page'));

const LazyPage1lzb7fh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzb7fh />
  </Suspense>
);

export { LazyPage1lzb7fh };
