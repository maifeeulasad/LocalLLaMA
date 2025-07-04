import React, { lazy, Suspense } from 'react';

const Page1lqwth8 = lazy(() => import('./Page'));

const LazyPage1lqwth8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqwth8 />
  </Suspense>
);

export { LazyPage1lqwth8 };
