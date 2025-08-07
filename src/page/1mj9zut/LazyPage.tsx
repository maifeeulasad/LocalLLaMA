import React, { lazy, Suspense } from 'react';

const Page1mj9zut = lazy(() => import('./Page'));

const LazyPage1mj9zut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj9zut />
  </Suspense>
);

export { LazyPage1mj9zut };
