import React, { lazy, Suspense } from 'react';

const Page1lxnsh1 = lazy(() => import('./Page'));

const LazyPage1lxnsh1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxnsh1 />
  </Suspense>
);

export { LazyPage1lxnsh1 };
