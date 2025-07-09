import React, { lazy, Suspense } from 'react';

const Page1lv6mju = lazy(() => import('./Page'));

const LazyPage1lv6mju = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv6mju />
  </Suspense>
);

export { LazyPage1lv6mju };
