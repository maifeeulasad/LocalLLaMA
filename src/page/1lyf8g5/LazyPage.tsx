import React, { lazy, Suspense } from 'react';

const Page1lyf8g5 = lazy(() => import('./Page'));

const LazyPage1lyf8g5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyf8g5 />
  </Suspense>
);

export { LazyPage1lyf8g5 };
