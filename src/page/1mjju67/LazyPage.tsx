import React, { lazy, Suspense } from 'react';

const Page1mjju67 = lazy(() => import('./Page'));

const LazyPage1mjju67 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjju67 />
  </Suspense>
);

export { LazyPage1mjju67 };
