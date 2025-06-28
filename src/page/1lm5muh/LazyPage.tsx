import React, { lazy, Suspense } from 'react';

const Page1lm5muh = lazy(() => import('./Page'));

const LazyPage1lm5muh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lm5muh />
  </Suspense>
);

export { LazyPage1lm5muh };
