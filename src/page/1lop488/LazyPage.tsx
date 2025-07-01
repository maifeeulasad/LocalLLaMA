import React, { lazy, Suspense } from 'react';

const Page1lop488 = lazy(() => import('./Page'));

const LazyPage1lop488 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lop488 />
  </Suspense>
);

export { LazyPage1lop488 };
