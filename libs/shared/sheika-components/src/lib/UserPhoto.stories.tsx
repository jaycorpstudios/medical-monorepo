
import React from 'react';
import UserPhoto from './UserPhoto';

export default {
  component: UserPhoto,
  title: 'UserPhoto'
};

export const basic = () => (
  <UserPhoto
    name= 'Jay Benitez'
    className= ''
    gender= 'male'
  />
)

export const withImage = () => (
  <UserPhoto
    name= 'Sponge Bobe'
    gender="male"
    src="https://a.ltrbxd.com/avatar/twitter/4/3/8/3/8/2/shard/http___pbs.twimg.com_profile_images_959679433505497089__0ShmWMC.jpg?k=cd3effc45f"
  />
)