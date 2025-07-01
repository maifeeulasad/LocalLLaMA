import React, { lazy, Suspense } from 'react';

const Page1loxw8f = lazy(() => import('./Page'));

const LazyPage1loxw8f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loxw8f />
  </Suspense>
);

export { LazyPage1loxw8f };
