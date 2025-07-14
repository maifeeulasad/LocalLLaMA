import React, { lazy, Suspense } from 'react';

const Page1lzk041 = lazy(() => import('./Page'));

const LazyPage1lzk041 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzk041 />
  </Suspense>
);

export { LazyPage1lzk041 };
