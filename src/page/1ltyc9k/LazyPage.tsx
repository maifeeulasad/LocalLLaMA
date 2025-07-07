import React, { lazy, Suspense } from 'react';

const Page1ltyc9k = lazy(() => import('./Page'));

const LazyPage1ltyc9k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltyc9k />
  </Suspense>
);

export { LazyPage1ltyc9k };
