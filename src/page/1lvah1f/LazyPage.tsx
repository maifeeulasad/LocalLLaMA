import React, { lazy, Suspense } from 'react';

const Page1lvah1f = lazy(() => import('./Page'));

const LazyPage1lvah1f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvah1f />
  </Suspense>
);

export { LazyPage1lvah1f };
