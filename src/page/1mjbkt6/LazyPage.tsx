import React, { lazy, Suspense } from 'react';

const Page1mjbkt6 = lazy(() => import('./Page'));

const LazyPage1mjbkt6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjbkt6 />
  </Suspense>
);

export { LazyPage1mjbkt6 };
