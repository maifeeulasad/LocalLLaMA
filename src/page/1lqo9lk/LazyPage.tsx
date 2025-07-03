import React, { lazy, Suspense } from 'react';

const Page1lqo9lk = lazy(() => import('./Page'));

const LazyPage1lqo9lk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqo9lk />
  </Suspense>
);

export { LazyPage1lqo9lk };
