import React, { lazy, Suspense } from 'react';

const Page1m8myv9 = lazy(() => import('./Page'));

const LazyPage1m8myv9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8myv9 />
  </Suspense>
);

export { LazyPage1m8myv9 };
