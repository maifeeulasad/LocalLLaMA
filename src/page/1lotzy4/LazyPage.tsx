import React, { lazy, Suspense } from 'react';

const Page1lotzy4 = lazy(() => import('./Page'));

const LazyPage1lotzy4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lotzy4 />
  </Suspense>
);

export { LazyPage1lotzy4 };
