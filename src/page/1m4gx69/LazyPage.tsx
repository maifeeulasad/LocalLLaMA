import React, { lazy, Suspense } from 'react';

const Page1m4gx69 = lazy(() => import('./Page'));

const LazyPage1m4gx69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4gx69 />
  </Suspense>
);

export { LazyPage1m4gx69 };
