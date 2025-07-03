import React, { lazy, Suspense } from 'react';

const Page1lq4bhu = lazy(() => import('./Page'));

const LazyPage1lq4bhu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq4bhu />
  </Suspense>
);

export { LazyPage1lq4bhu };
