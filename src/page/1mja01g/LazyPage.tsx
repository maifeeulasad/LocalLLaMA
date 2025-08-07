import React, { lazy, Suspense } from 'react';

const Page1mja01g = lazy(() => import('./Page'));

const LazyPage1mja01g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mja01g />
  </Suspense>
);

export { LazyPage1mja01g };
