import React, { lazy, Suspense } from 'react';

const Page1lqvovt = lazy(() => import('./Page'));

const LazyPage1lqvovt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqvovt />
  </Suspense>
);

export { LazyPage1lqvovt };
