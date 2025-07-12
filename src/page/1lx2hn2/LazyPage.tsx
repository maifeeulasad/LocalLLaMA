import React, { lazy, Suspense } from 'react';

const Page1lx2hn2 = lazy(() => import('./Page'));

const LazyPage1lx2hn2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx2hn2 />
  </Suspense>
);

export { LazyPage1lx2hn2 };
