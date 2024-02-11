import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const WrapperStyle = styled.div`
  margin: 0 auto;
  min-width: 320px;
  padding: 0 15px;

  @media ${device.tablet} {
    min-width: 728px;
    max-width: 1139px;
    padding: 0 20px;
  }

  @media ${device.desktop} {
    max-width: 1214px;
    padding: 0 15px;
  }
`;
