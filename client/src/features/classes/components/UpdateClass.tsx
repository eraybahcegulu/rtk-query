
import { useState } from 'react'
import { IClass } from '../types/index '
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { useUpdateClassMutation } from '../api';
import { Button, Input, Modal } from 'antd';
import { useRequestPending } from '../../../hooks/useRequestPending';

const UpdateClass = ({ item }: { item: IClass }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [updateClass, { isLoading }] = useUpdateClassMutation();
    const { isPending } = useRequestPending()

    const updateClassValidator = Yup.object({
        className: Yup.string().required("Username or Email required to login"),
    });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button disabled={isPending} onClick={showModal}>
                {
                    isLoading
                        ?
                        'Updating'
                        :
                        'Update'
                }
            </Button>

            <Modal className='flex justify-center items-center' title="Update Product" open={isModalOpen} onOk={handleOk} footer onCancel={handleCancel}>
                <Formik
                    initialValues={{ className: item.className }}
                    validationSchema={updateClassValidator}
                    onSubmit={async (values) => {
                        await updateClass({ id: item._id, className: values.className });
                        handleCancel();
                    }}
                >
                    <Form>
                        <div className="flex flex-col gap-4 w-[300px]">
                            <div className="flex flex-col gap-2">
                                <div>
                                    <Field name="className" as={Input} maxLength={20} label="Name" />
                                    <ErrorMessage name="className" component="div" className="text-red-500 text-xs" />
                                </div>
                            </div>

                            <Button htmlType='submit' >
                                {
                                    isLoading
                                        ?
                                        'Updating'
                                        :
                                        'Update'
                                }
                            </Button>

                        </div>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}

export default UpdateClass