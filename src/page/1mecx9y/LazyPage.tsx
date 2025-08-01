import React, { lazy, Suspense } from 'react';

const Page1mecx9y = lazy(() => import('./Page'));

const LazyPage1mecx9y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mecx9y />
  </Suspense>
);

export { LazyPage1mecx9y };
