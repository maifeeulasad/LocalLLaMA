import React, { lazy, Suspense } from 'react';

const Page1lmb5s3 = lazy(() => import('./Page'));

const LazyPage1lmb5s3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmb5s3 />
  </Suspense>
);

export { LazyPage1lmb5s3 };
