import React, { lazy, Suspense } from 'react';

const Page1m4vk88 = lazy(() => import('./Page'));

const LazyPage1m4vk88 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4vk88 />
  </Suspense>
);

export { LazyPage1m4vk88 };
