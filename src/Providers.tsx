import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from 'react'

import { NextUIProvider } from '@nextui-org/react'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient());
    return (
        <NextUIProvider>
            <QueryClientProvider client={client}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </NextUIProvider>
    )
}