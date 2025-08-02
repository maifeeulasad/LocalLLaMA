import React, { lazy, Suspense } from 'react';

const Page1mfitwb = lazy(() => import('./Page'));

const LazyPage1mfitwb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfitwb />
  </Suspense>
);

export { LazyPage1mfitwb };
