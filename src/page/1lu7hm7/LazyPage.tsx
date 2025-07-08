import React, { lazy, Suspense } from 'react';

const Page1lu7hm7 = lazy(() => import('./Page'));

const LazyPage1lu7hm7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu7hm7 />
  </Suspense>
);

export { LazyPage1lu7hm7 };
