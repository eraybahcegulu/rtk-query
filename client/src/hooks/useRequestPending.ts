import { useSelector } from "react-redux";

interface RootState {
    api: {
        queries: Record<string, { status: string }>;
        mutations: Record<string, { status: string }>;
    };
}

export const useRequestPending = () => {
    const isPending = useSelector((state: RootState) => {
        const isSomeQueryPending = Object.values(state.api.queries).some(
            (query) => query.status === 'pending'
        );
        const isSomeMutationPending = Object.values(state.api.mutations).some(
            (mutation) => mutation.status === 'pending'
        );
        return isSomeQueryPending || isSomeMutationPending;
    });
    return { isPending };
};