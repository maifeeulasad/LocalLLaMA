import React, { lazy, Suspense } from 'react';

const Page1lu818k = lazy(() => import('./Page'));

const LazyPage1lu818k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu818k />
  </Suspense>
);

export { LazyPage1lu818k };
