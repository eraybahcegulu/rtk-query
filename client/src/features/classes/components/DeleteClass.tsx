
import { Button } from 'antd';
import { useDeleteClassMutation } from '../api';
import { useRequestPending } from '../../../hooks/useRequestPending';

const DeleteClass = ({ classId, }: { classId: string }) => {
    const { isPending } = useRequestPending()

    const [deleteClass, { isLoading: isDeleteLoading }] = useDeleteClassMutation();



    return (
        <Button disabled={isPending} onClick={async () => (await deleteClass(classId))}>
            {
                isDeleteLoading
                    ?
                    'Deleting'
                    :
                    'Delete'
            }
        </Button>
    )
}

export default DeleteClass