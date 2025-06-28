import React, { lazy, Suspense } from 'react';

const Page1lluur5 = lazy(() => import('./Page'));

const LazyPage1lluur5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lluur5 />
  </Suspense>
);

export { LazyPage1lluur5 };
