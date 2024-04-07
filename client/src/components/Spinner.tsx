
import { Spin } from 'antd';

interface ICustomButtonProps {
    size?: 'small' | 'default' | 'large';

}

const Spinner: React.FC<ICustomButtonProps> = ({ size }) => {

    return (
        <Spin size={size} />
    );
};

export default Spinner;