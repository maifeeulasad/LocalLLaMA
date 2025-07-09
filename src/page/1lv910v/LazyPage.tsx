import React, { lazy, Suspense } from 'react';

const Page1lv910v = lazy(() => import('./Page'));

const LazyPage1lv910v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv910v />
  </Suspense>
);

export { LazyPage1lv910v };
