import React, { lazy, Suspense } from 'react';

const Page1lmjg3p = lazy(() => import('./Page'));

const LazyPage1lmjg3p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmjg3p />
  </Suspense>
);

export { LazyPage1lmjg3p };
