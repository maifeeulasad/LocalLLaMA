import React, { lazy, Suspense } from 'react';

const Page1lm04jn = lazy(() => import('./Page'));

const LazyPage1lm04jn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm04jn />
  </Suspense>
);

export { LazyPage1lm04jn };
