import React, { lazy, Suspense } from 'react';

const Page1lntw6i = lazy(() => import('./Page'));

const LazyPage1lntw6i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lntw6i />
  </Suspense>
);

export { LazyPage1lntw6i };
