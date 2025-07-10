import React, { lazy, Suspense } from 'react';

const Page1lvsw5d = lazy(() => import('./Page'));

const LazyPage1lvsw5d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvsw5d />
  </Suspense>
);

export { LazyPage1lvsw5d };
