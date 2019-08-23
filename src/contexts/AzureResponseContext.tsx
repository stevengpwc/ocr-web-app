import { createContextUseState } from '../utils/ContextHelper'

const [ctx, provider] = createContextUseState('');

export const AzureResponseProvider = provider;
export const AzureResponseContext = ctx;
