import React, { lazy, Suspense } from 'react';

const Page1m6ufm4 = lazy(() => import('./Page'));

const LazyPage1m6ufm4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6ufm4 />
  </Suspense>
);

export { LazyPage1m6ufm4 };
