import React, { lazy, Suspense } from 'react';

const Page1m3pez5 = lazy(() => import('./Page'));

const LazyPage1m3pez5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3pez5 />
  </Suspense>
);

export { LazyPage1m3pez5 };
