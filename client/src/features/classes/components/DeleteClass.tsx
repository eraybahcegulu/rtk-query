import { useDeleteClassMutation } from '../api';
import CustomButton from '../../../components/Elements/CustomButton';

const DeleteClass = ({ classId, }: { classId: string }) => {
    const [deleteClass, { isLoading: isDeleteLoading }] = useDeleteClassMutation();

    return (
        <CustomButton className='w-[100px]' size='large' isLoading={isDeleteLoading} onClick={async () => (await deleteClass(classId))}>
            Delete
        </CustomButton>
    )
}

export default DeleteClass