import React from 'react';
import ProfileView from '../component/ProfileView';
import { getMockUser } from '../../../utils/mockDatas';

const Profile = () => {
    const mockUser = getMockUser()
    return <ProfileView {...mockUser} />
}
export default Profile

