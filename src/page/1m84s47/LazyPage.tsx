import React, { lazy, Suspense } from 'react';

const Page1m84s47 = lazy(() => import('./Page'));

const LazyPage1m84s47 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m84s47 />
  </Suspense>
);

export { LazyPage1m84s47 };
