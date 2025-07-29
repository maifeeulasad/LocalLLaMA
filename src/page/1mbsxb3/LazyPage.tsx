import React, { lazy, Suspense } from 'react';

const Page1mbsxb3 = lazy(() => import('./Page'));

const LazyPage1mbsxb3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbsxb3 />
  </Suspense>
);

export { LazyPage1mbsxb3 };
