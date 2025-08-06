import React, { lazy, Suspense } from 'react';

const Page1mirq08 = lazy(() => import('./Page'));

const LazyPage1mirq08 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mirq08 />
  </Suspense>
);

export { LazyPage1mirq08 };
