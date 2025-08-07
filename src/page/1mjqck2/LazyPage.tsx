import React, { lazy, Suspense } from 'react';

const Page1mjqck2 = lazy(() => import('./Page'));

const LazyPage1mjqck2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjqck2 />
  </Suspense>
);

export { LazyPage1mjqck2 };
