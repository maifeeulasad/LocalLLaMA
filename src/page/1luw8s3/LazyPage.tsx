import React, { lazy, Suspense } from 'react';

const Page1luw8s3 = lazy(() => import('./Page'));

const LazyPage1luw8s3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luw8s3 />
  </Suspense>
);

export { LazyPage1luw8s3 };
