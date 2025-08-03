import React, { lazy, Suspense } from 'react';

const Page1mg3i48 = lazy(() => import('./Page'));

const LazyPage1mg3i48 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg3i48 />
  </Suspense>
);

export { LazyPage1mg3i48 };
