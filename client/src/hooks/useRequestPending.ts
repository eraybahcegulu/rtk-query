import { useSelector } from "react-redux";


export const useRequestPending = () => {

    const isPending = useSelector((state) => {
        const isSomeQueryPending = Object.values(state.api.queries).some(
            (query) => query.status === 'pending'
        );
        const isSomeMutationPending = Object.values(state.api.mutations).some(
            (mutation) => mutation.status === 'pending'
        );
        return isSomeQueryPending || isSomeMutationPending;
    });
    return {isPending};
};