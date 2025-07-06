import React, { lazy, Suspense } from 'react';

const Page1lsvsw0 = lazy(() => import('./Page'));

const LazyPage1lsvsw0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsvsw0 />
  </Suspense>
);

export { LazyPage1lsvsw0 };
