import React, { lazy, Suspense } from 'react';

const Page1lqu8q7 = lazy(() => import('./Page'));

const LazyPage1lqu8q7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqu8q7 />
  </Suspense>
);

export { LazyPage1lqu8q7 };
