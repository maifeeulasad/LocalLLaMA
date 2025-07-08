import React, { lazy, Suspense } from 'react';

const Page1lu7hd6 = lazy(() => import('./Page'));

const LazyPage1lu7hd6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu7hd6 />
  </Suspense>
);

export { LazyPage1lu7hd6 };
