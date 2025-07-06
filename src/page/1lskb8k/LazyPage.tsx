import React, { lazy, Suspense } from 'react';

const Page1lskb8k = lazy(() => import('./Page'));

const LazyPage1lskb8k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lskb8k />
  </Suspense>
);

export { LazyPage1lskb8k };
