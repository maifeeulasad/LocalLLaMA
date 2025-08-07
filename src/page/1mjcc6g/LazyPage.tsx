import React, { lazy, Suspense } from 'react';

const Page1mjcc6g = lazy(() => import('./Page'));

const LazyPage1mjcc6g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjcc6g />
  </Suspense>
);

export { LazyPage1mjcc6g };
