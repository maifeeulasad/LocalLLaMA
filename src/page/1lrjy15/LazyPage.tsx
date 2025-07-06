import React, { lazy, Suspense } from 'react';

const Page1lrjy15 = lazy(() => import('./Page'));

const LazyPage1lrjy15 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrjy15 />
  </Suspense>
);

export { LazyPage1lrjy15 };
