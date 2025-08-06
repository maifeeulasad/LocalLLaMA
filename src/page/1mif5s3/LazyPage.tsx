import React, { lazy, Suspense } from 'react';

const Page1mif5s3 = lazy(() => import('./Page'));

const LazyPage1mif5s3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mif5s3 />
  </Suspense>
);

export { LazyPage1mif5s3 };
