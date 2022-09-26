import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { userSelector } from '../features/userSlice';

function PrivateRoute({ children, targetComponent: TargetComponent }) {
    const user = useSelector(userSelector)
    const token = user.token
    
    if (token !== null ) {
        return children
    }

    return <Navigate to="/login" />
}

export default PrivateRoute