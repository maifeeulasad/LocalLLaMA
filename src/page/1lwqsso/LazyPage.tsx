import React, { lazy, Suspense } from 'react';

const Page1lwqsso = lazy(() => import('./Page'));

const LazyPage1lwqsso = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwqsso />
  </Suspense>
);

export { LazyPage1lwqsso };
