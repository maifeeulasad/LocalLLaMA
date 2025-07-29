import React, { lazy, Suspense } from 'react';

const Page1mbzdx8 = lazy(() => import('./Page'));

const LazyPage1mbzdx8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbzdx8 />
  </Suspense>
);

export { LazyPage1mbzdx8 };
