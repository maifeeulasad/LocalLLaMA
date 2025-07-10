import React, { lazy, Suspense } from 'react';

const Page1lvm7vk = lazy(() => import('./Page'));

const LazyPage1lvm7vk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvm7vk />
  </Suspense>
);

export { LazyPage1lvm7vk };
