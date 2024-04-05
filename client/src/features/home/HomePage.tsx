import { useGetClassesQuery } from '../classes/api';

const HomePage = () => {
    const { data, isLoading } = useGetClassesQuery({});

    if (!data || isLoading) return <span>loading...</span>

    console.log(data)
    return (
        <div>HomePage</div>
    )
}

export default HomePage