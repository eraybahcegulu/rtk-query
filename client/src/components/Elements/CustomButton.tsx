
import { Button } from 'antd';
import { useRequestPending } from '../../hooks/useRequestPending';
import Spinner from '../Spinner';
import clsx from 'clsx';

interface ICustomButtonProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    isLoading?: boolean;
    children: React.ReactNode;
    htmlType?: 'button' | 'submit' | 'reset';
    size?: 'small' | 'middle' | 'large';
    className?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({ isLoading, children, className, htmlType, size, ...rest }) => {
    const { isPending } = useRequestPending();

    return (
        <Button className={clsx('', className)} size={size} disabled={isPending || isLoading} htmlType={htmlType}  {...rest}>
            {isLoading ? <Spinner /> : children}
        </Button>
    );
};

export default CustomButton;
