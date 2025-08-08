import React, { lazy, Suspense } from 'react';

const Page1mkhga1 = lazy(() => import('./Page'));

const LazyPage1mkhga1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkhga1 />
  </Suspense>
);

export { LazyPage1mkhga1 };
