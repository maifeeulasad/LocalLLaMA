import React, { lazy, Suspense } from 'react';

const Page1lzfhhq = lazy(() => import('./Page'));

const LazyPage1lzfhhq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzfhhq />
  </Suspense>
);

export { LazyPage1lzfhhq };
