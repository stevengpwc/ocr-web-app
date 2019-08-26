import { createContextUseState } from '../utils/ContextHelper'

const initialValue: string[] = [];
const [ctx, provider] = createContextUseState(initialValue);

export const AzureResponseProvider = provider;
export const AzureResponseContext = ctx;
