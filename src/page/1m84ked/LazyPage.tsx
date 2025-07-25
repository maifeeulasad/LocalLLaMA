import React, { lazy, Suspense } from 'react';

const Page1m84ked = lazy(() => import('./Page'));

const LazyPage1m84ked = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m84ked />
  </Suspense>
);

export { LazyPage1m84ked };
