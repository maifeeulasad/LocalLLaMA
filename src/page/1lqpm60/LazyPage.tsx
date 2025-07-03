import React, { lazy, Suspense } from 'react';

const Page1lqpm60 = lazy(() => import('./Page'));

const LazyPage1lqpm60 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqpm60 />
  </Suspense>
);

export { LazyPage1lqpm60 };
