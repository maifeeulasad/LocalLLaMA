import React, { lazy, Suspense } from 'react';

const Page1i9nqj9 = lazy(() => import('./Page'));

const LazyPage1i9nqj9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i9nqj9 />
  </Suspense>
);

export { LazyPage1i9nqj9 };
