import React, { lazy, Suspense } from 'react';

const Page1lqeya7 = lazy(() => import('./Page'));

const LazyPage1lqeya7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqeya7 />
  </Suspense>
);

export { LazyPage1lqeya7 };
