import React, { lazy, Suspense } from 'react';

const Page1mjrbt9 = lazy(() => import('./Page'));

const LazyPage1mjrbt9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjrbt9 />
  </Suspense>
);

export { LazyPage1mjrbt9 };
