import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './styled'

type Input = {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  defaultValue?: string;
}

const Input = ({label, type, register, defaultValue}: Input) => {
  return (
    <S.ContainerInput>
      <S.Label>{label}</S.Label>
      <S.Input type={type} {...register} defaultValue={defaultValue} />
    </S.ContainerInput>
  )
}

export default Input