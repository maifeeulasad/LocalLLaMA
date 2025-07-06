import React, { lazy, Suspense } from 'react';

const Page1lrmxn7 = lazy(() => import('./Page'));

const LazyPage1lrmxn7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrmxn7 />
  </Suspense>
);

export { LazyPage1lrmxn7 };
