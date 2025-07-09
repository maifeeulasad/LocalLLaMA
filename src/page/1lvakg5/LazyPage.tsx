import React, { lazy, Suspense } from 'react';

const Page1lvakg5 = lazy(() => import('./Page'));

const LazyPage1lvakg5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvakg5 />
  </Suspense>
);

export { LazyPage1lvakg5 };
