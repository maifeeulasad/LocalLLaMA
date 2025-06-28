import React, { lazy, Suspense } from 'react';

const Page1lmd8ut = lazy(() => import('./Page'));

const LazyPage1lmd8ut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmd8ut />
  </Suspense>
);

export { LazyPage1lmd8ut };
