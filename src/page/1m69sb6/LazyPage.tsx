import React, { lazy, Suspense } from 'react';

const Page1m69sb6 = lazy(() => import('./Page'));

const LazyPage1m69sb6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m69sb6 />
  </Suspense>
);

export { LazyPage1m69sb6 };
