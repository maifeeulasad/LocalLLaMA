import React, { lazy, Suspense } from 'react';

const Page1mjdvr6 = lazy(() => import('./Page'));

const LazyPage1mjdvr6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjdvr6 />
  </Suspense>
);

export { LazyPage1mjdvr6 };
