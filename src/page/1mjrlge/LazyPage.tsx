import React, { lazy, Suspense } from 'react';

const Page1mjrlge = lazy(() => import('./Page'));

const LazyPage1mjrlge = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjrlge />
  </Suspense>
);

export { LazyPage1mjrlge };
