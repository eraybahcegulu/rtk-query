import { useGetClassesQuery } from '../api';
import { IGetClasses } from '../types/index ';

import DeleteClass from './DeleteClass';
import UpdateClass from './UpdateClass';
import { Table } from 'antd';

const GetClasses = () => {
    const { data, isLoading, isFetching } = useGetClassesQuery({});

    const columns = [
        {
            title: 'Class Name',
            dataIndex: 'className',
            key: 'className',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (record: IGetClasses) => (
                <span>
                    <DeleteClass classId={record._id} />
                    <UpdateClass item={record} />
                </span>
            ),
        },
    ];

    return (
        <div className={`h-full w-full flex justify-center items-center`}>
            {
                !data || isLoading
                    ?
                    <span> loading </span>
                    :
                    <Table
                        className='w-[500px] min-h-[200px]'
                        scroll={{ y: 200 }}
                        dataSource={data}
                        columns={columns}
                        loading={{
                            spinning: isFetching
                        }}
                        locale={{
                            emptyText: !isLoading ? <span>boş </span> : <span>Loading</span>
                        }}
                        rowKey="_id" />
            }
        </div>
    );
};

export default GetClasses;
