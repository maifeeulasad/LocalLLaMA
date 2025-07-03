import React, { lazy, Suspense } from 'react';

const Page1lpproa = lazy(() => import('./Page'));

const LazyPage1lpproa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpproa />
  </Suspense>
);

export { LazyPage1lpproa };
