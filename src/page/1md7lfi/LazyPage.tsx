import React, { lazy, Suspense } from 'react';

const Page1md7lfi = lazy(() => import('./Page'));

const LazyPage1md7lfi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md7lfi />
  </Suspense>
);

export { LazyPage1md7lfi };
