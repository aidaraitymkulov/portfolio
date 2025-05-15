import { ImageProps } from 'next/image';
import { IIconType } from '@/shared/types/icon';
import { icons } from './Icon.helper';
import Image from 'next/image';

interface IIconProps extends Omit<ImageProps, 'src'> {
  type: IIconType;
}

export const Icon = ({ type, alt, ...rest }: IIconProps) => {
  return <Image src={icons[type]} alt={alt || type} {...rest} />;
};