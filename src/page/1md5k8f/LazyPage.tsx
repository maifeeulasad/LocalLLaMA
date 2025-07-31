import React, { lazy, Suspense } from 'react';

const Page1md5k8f = lazy(() => import('./Page'));

const LazyPage1md5k8f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md5k8f />
  </Suspense>
);

export { LazyPage1md5k8f };
