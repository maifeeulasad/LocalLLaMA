import React, { lazy, Suspense } from 'react';

const Page1m8j842 = lazy(() => import('./Page'));

const LazyPage1m8j842 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8j842 />
  </Suspense>
);

export { LazyPage1m8j842 };
