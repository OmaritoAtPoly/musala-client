import React from 'react';
import UserProfile from '../component/Profile';
import { getMockUser } from '../../../utils/mockDatas';

const Profile = () => {
    const mockUser = getMockUser()
    return <UserProfile {...mockUser} />
}
export default Profile

