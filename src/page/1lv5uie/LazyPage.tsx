import React, { lazy, Suspense } from 'react';

const Page1lv5uie = lazy(() => import('./Page'));

const LazyPage1lv5uie = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv5uie />
  </Suspense>
);

export { LazyPage1lv5uie };
