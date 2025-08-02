import React, { lazy, Suspense } from 'react';

const Page1mfe77f = lazy(() => import('./Page'));

const LazyPage1mfe77f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfe77f />
  </Suspense>
);

export { LazyPage1mfe77f };
