import React, { lazy, Suspense } from 'react';

const Page1lv88fs = lazy(() => import('./Page'));

const LazyPage1lv88fs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv88fs />
  </Suspense>
);

export { LazyPage1lv88fs };
