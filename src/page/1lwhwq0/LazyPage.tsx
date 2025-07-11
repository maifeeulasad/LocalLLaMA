import React, { lazy, Suspense } from 'react';

const Page1lwhwq0 = lazy(() => import('./Page'));

const LazyPage1lwhwq0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwhwq0 />
  </Suspense>
);

export { LazyPage1lwhwq0 };
