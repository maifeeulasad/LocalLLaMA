import React, { lazy, Suspense } from 'react';

const Page1lv0wvw = lazy(() => import('./Page'));

const LazyPage1lv0wvw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv0wvw />
  </Suspense>
);

export { LazyPage1lv0wvw };
