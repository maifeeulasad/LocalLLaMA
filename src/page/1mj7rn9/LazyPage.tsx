import React, { lazy, Suspense } from 'react';

const Page1mj7rn9 = lazy(() => import('./Page'));

const LazyPage1mj7rn9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj7rn9 />
  </Suspense>
);

export { LazyPage1mj7rn9 };
