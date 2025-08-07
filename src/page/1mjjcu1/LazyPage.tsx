import React, { lazy, Suspense } from 'react';

const Page1mjjcu1 = lazy(() => import('./Page'));

const LazyPage1mjjcu1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjjcu1 />
  </Suspense>
);

export { LazyPage1mjjcu1 };
