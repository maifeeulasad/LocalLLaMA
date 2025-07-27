import React, { lazy, Suspense } from 'react';

const Page1m9w0k8 = lazy(() => import('./Page'));

const LazyPage1m9w0k8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9w0k8 />
  </Suspense>
);

export { LazyPage1m9w0k8 };
