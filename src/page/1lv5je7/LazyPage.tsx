import React, { lazy, Suspense } from 'react';

const Page1lv5je7 = lazy(() => import('./Page'));

const LazyPage1lv5je7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv5je7 />
  </Suspense>
);

export { LazyPage1lv5je7 };
