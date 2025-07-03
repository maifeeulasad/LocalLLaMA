import React, { lazy, Suspense } from 'react';

const Page1lqo1bt = lazy(() => import('./Page'));

const LazyPage1lqo1bt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqo1bt />
  </Suspense>
);

export { LazyPage1lqo1bt };
