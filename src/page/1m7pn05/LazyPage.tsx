import React, { lazy, Suspense } from 'react';

const Page1m7pn05 = lazy(() => import('./Page'));

const LazyPage1m7pn05 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7pn05 />
  </Suspense>
);

export { LazyPage1m7pn05 };
