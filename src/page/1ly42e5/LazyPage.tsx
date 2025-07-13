import React, { lazy, Suspense } from 'react';

const Page1ly42e5 = lazy(() => import('./Page'));

const LazyPage1ly42e5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly42e5 />
  </Suspense>
);

export { LazyPage1ly42e5 };
