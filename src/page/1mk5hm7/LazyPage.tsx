import React, { lazy, Suspense } from 'react';

const Page1mk5hm7 = lazy(() => import('./Page'));

const LazyPage1mk5hm7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk5hm7 />
  </Suspense>
);

export { LazyPage1mk5hm7 };
