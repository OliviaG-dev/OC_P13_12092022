import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { userSelector } from '../features/userSlice';

function PrivateRoute({ children }) {
    const user = useSelector(userSelector)
    const token = user.token
    
    if (!token) {
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute