import React, { lazy, Suspense } from 'react';

const Page1lm5a05 = lazy(() => import('./Page'));

const LazyPage1lm5a05 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm5a05 />
  </Suspense>
);

export { LazyPage1lm5a05 };
