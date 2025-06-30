import React, { lazy, Suspense } from 'react';

const Page1lo0rk8 = lazy(() => import('./Page'));

const LazyPage1lo0rk8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lo0rk8 />
  </Suspense>
);

export { LazyPage1lo0rk8 };
