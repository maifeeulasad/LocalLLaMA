import React, { lazy, Suspense } from 'react';

const Page1lzy059 = lazy(() => import('./Page'));

const LazyPage1lzy059 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzy059 />
  </Suspense>
);

export { LazyPage1lzy059 };
