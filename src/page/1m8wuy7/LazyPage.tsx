import React, { lazy, Suspense } from 'react';

const Page1m8wuy7 = lazy(() => import('./Page'));

const LazyPage1m8wuy7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8wuy7 />
  </Suspense>
);

export { LazyPage1m8wuy7 };
