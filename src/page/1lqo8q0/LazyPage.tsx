import React, { lazy, Suspense } from 'react';

const Page1lqo8q0 = lazy(() => import('./Page'));

const LazyPage1lqo8q0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqo8q0 />
  </Suspense>
);

export { LazyPage1lqo8q0 };
