import './Dashboard.css'
import  UserCard  from '../../components/UserCard/UserCard';
import UserProfil from '../../components/UserProfil/UserProfil';

const Dashboard = () => (
    <div className="dashboard" >
      <UserProfil />
      <UserCard />
    </div>
  );

export default Dashboard