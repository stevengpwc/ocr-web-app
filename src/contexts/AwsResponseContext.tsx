import { createContextUseState } from '../utils/ContextHelper'

const initialValue: string[] = [];
const [ctx, provider] = createContextUseState(initialValue);

export const AwsResponseProvider = provider;
export const AwsResponseContext = ctx;
