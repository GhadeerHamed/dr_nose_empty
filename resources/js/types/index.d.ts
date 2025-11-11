export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    locale: string,
    appName: string,
    currentRouteName: string | null,
    description: string | undefined,
    image: string | undefined,
    canonical: string,
    appUrl: string,
};
