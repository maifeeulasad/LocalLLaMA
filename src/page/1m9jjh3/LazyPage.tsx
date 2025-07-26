import React, { lazy, Suspense } from 'react';

const Page1m9jjh3 = lazy(() => import('./Page'));

const LazyPage1m9jjh3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9jjh3 />
  </Suspense>
);

export { LazyPage1m9jjh3 };
