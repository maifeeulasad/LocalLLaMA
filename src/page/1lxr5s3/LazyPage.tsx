import React, { lazy, Suspense } from 'react';

const Page1lxr5s3 = lazy(() => import('./Page'));

const LazyPage1lxr5s3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxr5s3 />
  </Suspense>
);

export { LazyPage1lxr5s3 };
