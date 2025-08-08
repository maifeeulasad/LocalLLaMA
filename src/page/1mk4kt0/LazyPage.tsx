import React, { lazy, Suspense } from 'react';

const Page1mk4kt0 = lazy(() => import('./Page'));

const LazyPage1mk4kt0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk4kt0 />
  </Suspense>
);

export { LazyPage1mk4kt0 };
