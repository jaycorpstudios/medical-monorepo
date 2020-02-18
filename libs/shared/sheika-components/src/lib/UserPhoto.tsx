import React from 'react';
import styled from 'styled-components';

export interface UserPhotoProps {
  src?: string
  className?: string
  name: string
  gender: 'male' | 'female'  
}
const colorElementShadow = 'rgba(0,0,0,.2)';
const animationSlow = '600ms';
const colorTextNegative = 'rgb(255,255,255)';
const colorMale = 'rgb(10,86,134)';
const colorFemale = 'rgb(176,33,106)';

const StyleImg = styled.img`
  max-height: 40px;
  max-width: 40px;
  border-radius: 100%;
  width: 100%;
  height: 100%;
`


interface StyleFigureProps {
  gender: 'male' | 'female'
}

const StyleFigure = styled.figure<StyleFigureProps>`
  display: flex;
  font-weight: 600;
  color: ${colorTextNegative};
  justify-content: center;
  align-items: center;
  text-shadow: 0 0 5px ${colorElementShadow};
  transition: ${animationSlow};
  background-color: ${props => props.gender === 'male' ? colorMale : colorFemale};
  border-radius: 100%;
  width: 100%;
  height: 100%;
  max-height: 16px;
  max-width: 16px;
  padding: 16px;
`;

export const UserPhoto = ({ src, name, gender = 'male', className, ...other }: UserPhotoProps) => {
  
  const classes = `UserPhoto ${className}`;
  
  if (src) {
    return <StyleImg className={classes} src={src} alt={name} {...other} />;
  }
  const [firstName = '', sourName = ''] = name.trim().split(' ');
  const [firstNameinitial = ''] = firstName.split('');
  const [sourNameinitial = ''] = sourName.split('');
  const initials = `${firstNameinitial}${sourNameinitial}`.toUpperCase();
  return <StyleFigure gender={gender}><figcaption>{initials}</figcaption></StyleFigure>;
};

export default UserPhoto;
