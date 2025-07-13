import React, { lazy, Suspense } from 'react';

const Page1lyvah4 = lazy(() => import('./Page'));

const LazyPage1lyvah4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyvah4 />
  </Suspense>
);

export { LazyPage1lyvah4 };
