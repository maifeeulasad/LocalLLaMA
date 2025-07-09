import React, { lazy, Suspense } from 'react';

const Page1lv7xnh = lazy(() => import('./Page'));

const LazyPage1lv7xnh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv7xnh />
  </Suspense>
);

export { LazyPage1lv7xnh };
