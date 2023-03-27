import { proxyConfig } from '@/config';
import { createRequest } from './request';

const { url, urlPattern } = proxyConfig[import.meta.env.MODE];

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY || false;

export const request = createRequest({ baseURL: isHttpProxy ? urlPattern : url });

// export const secondRequest = createRequest({ baseURL: isHttpProxy ? secondUrlPattern : secondUrl });
export const mockRequest = createRequest({ baseURL: '/mock' });
