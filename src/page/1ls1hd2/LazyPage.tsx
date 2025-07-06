import React, { lazy, Suspense } from 'react';

const Page1ls1hd2 = lazy(() => import('./Page'));

const LazyPage1ls1hd2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls1hd2 />
  </Suspense>
);

export { LazyPage1ls1hd2 };
