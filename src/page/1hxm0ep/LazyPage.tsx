import React, { lazy, Suspense } from 'react';

const Page1hxm0ep = lazy(() => import('./Page'));

const LazyPage1hxm0ep = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1hxm0ep />
  </Suspense>
);

export { LazyPage1hxm0ep };
