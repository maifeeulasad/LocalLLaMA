import React, { lazy, Suspense } from 'react';

const Page1lpzk03 = lazy(() => import('./Page'));

const LazyPage1lpzk03 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpzk03 />
  </Suspense>
);

export { LazyPage1lpzk03 };
