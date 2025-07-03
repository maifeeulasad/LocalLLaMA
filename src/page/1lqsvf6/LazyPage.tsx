import React, { lazy, Suspense } from 'react';

const Page1lqsvf6 = lazy(() => import('./Page'));

const LazyPage1lqsvf6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqsvf6 />
  </Suspense>
);

export { LazyPage1lqsvf6 };
