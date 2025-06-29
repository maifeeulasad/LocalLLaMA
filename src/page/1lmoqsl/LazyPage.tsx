import React, { lazy, Suspense } from 'react';

const Page1lmoqsl = lazy(() => import('./Page'));

const LazyPage1lmoqsl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmoqsl />
  </Suspense>
);

export { LazyPage1lmoqsl };
