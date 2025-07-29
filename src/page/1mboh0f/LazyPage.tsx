import React, { lazy, Suspense } from 'react';

const Page1mboh0f = lazy(() => import('./Page'));

const LazyPage1mboh0f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mboh0f />
  </Suspense>
);

export { LazyPage1mboh0f };
