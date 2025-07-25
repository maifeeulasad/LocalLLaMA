import React, { lazy, Suspense } from 'react';

const Page1m8w9ah = lazy(() => import('./Page'));

const LazyPage1m8w9ah = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8w9ah />
  </Suspense>
);

export { LazyPage1m8w9ah };
