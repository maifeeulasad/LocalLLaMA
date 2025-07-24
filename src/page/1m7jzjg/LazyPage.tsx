import React, { lazy, Suspense } from 'react';

const Page1m7jzjg = lazy(() => import('./Page'));

const LazyPage1m7jzjg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7jzjg />
  </Suspense>
);

export { LazyPage1m7jzjg };
