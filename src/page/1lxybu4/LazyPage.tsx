import React, { lazy, Suspense } from 'react';

const Page1lxybu4 = lazy(() => import('./Page'));

const LazyPage1lxybu4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxybu4 />
  </Suspense>
);

export { LazyPage1lxybu4 };
