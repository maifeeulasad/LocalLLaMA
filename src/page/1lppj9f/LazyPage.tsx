import React, { lazy, Suspense } from 'react';

const Page1lppj9f = lazy(() => import('./Page'));

const LazyPage1lppj9f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lppj9f />
  </Suspense>
);

export { LazyPage1lppj9f };
