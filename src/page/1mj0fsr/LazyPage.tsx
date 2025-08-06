import React, { lazy, Suspense } from 'react';

const Page1mj0fsr = lazy(() => import('./Page'));

const LazyPage1mj0fsr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj0fsr />
  </Suspense>
);

export { LazyPage1mj0fsr };
